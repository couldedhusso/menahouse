<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Conversation;
use App\Sender;
use App\Receiver;
use App\Profiles;
use App\UserMessage;
use Carbon\Carbon;
use App\Images;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;

use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image ;
use Illuminate\Filesystem\FileNotFoundException;



class UserMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        $userid = Auth::user()->id;
        $receivers = Receiver::wheretoid($userid)
                              ->lists('readed', 'msgid')
                              ->toArray();

        $newMessageCount = [] ;

         $receiverMsgId =  Receiver::where('toid', $userid)->pluck('msgid');



        // foreach ($receivers as $receiver) {
        //     dd($receiver);
        // }

        $ums = UserMessage::wheretoid($userid)
                                    ->orderBy('id', 'desc')
                                    ->with('images')
                                    ->get();


        //
        // foreach ($ums as $um) {
        //   if ($um->created_at > $receivers[$um->id]) {
        //       $newMessageCount[] = $um->id ;
        //   }
        // }
        //  $piece_jointes  = array();
        foreach ($ums as $um) {
          if ($um->fichiers_joints == "1") {
            $piece_jointes[$um->id] = "true";
          } else {
            $piece_jointes[$um->id] = "false";
          }
          // if (! $receivers[$um->id]) {
          //     $newMessageCount[] = $um->id ;
          // }
        }
        
        // dd(count($newMessageCount));

        return view('sessions.inbox', compact('userid', 'ums', 'piece_jointes'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = User::whereid(Auth::user()->id)->first();
        $umail = $user->email ;
        return view('messenger.newmessage', compact('umail'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = Input::all();
        $Fromid = Auth::user()->id ;
        $Toid = User::whereemail(Input::get('email'))->first();


        $storage_path = public_path().'/storage/fichiers_joints/' ;

        if(! File::exists($storage_path)) {
            File::makeDirectory($storage_path);
        }

        // $conversation = Conversation::create(['subject' => Input::get('subject')]);

        $um = UserMessage::create([
            'subject' => Input::get('subject'),
            'fromid' => Input::get('sender'),
            'toid' => Input::get('receiver'),
            'body' => Input::get('body')
        ]);

        $receiver = new Receiver ;

        // $receiver->from = $Toid->id;

        $receiver->toid = Input::get('receiver');
        $receiver->msgid = $um->id;
        $receiver->last_read = Carbon::now() ;
        $receiver->save();


        $sender = new Sender;
        $sender->userid = Input::get('sender') ;
        $sender->msgid = $um->id ;
        $sender->save();

        // joined file

       $pic = Input::file('pics');

       if ( $pic[0] !== null ) {

       foreach(Input::file('pics')  as $imgvalue) {

              $filename = date('Y-m-d')."-".str_random(8)."-".$imgvalue->getClientOriginalName();

              if( $imgvalue->isValid() ){
                    $imgvalue->move($storage_path, $filename);

                    $img = new Images ;
                    $img = $um->images()->create(array('path' => $filename));
                    $um->images()->save($img);
              }
          }

          $um->fichiers_joints = true ;
          $um->save();

       }

       return redirect('messages');

    }

    /**
     * Shows a message thread
     *
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        try {
            $um = UserMessage::whereid($id)->first();

        } catch (ModelNotFoundException $e) {
            Session::flash('error_message', 'The thread with ID: ' . $id . ' was not found.');
            return redirect('messages');
        }

        // show current user in list if not a current participant
        // $users = User::whereNotIn('id', $thread->participantsUserIds())->get();

        // $sender = User::find($um->toid)->first();

        // don't show the current user in list
        $userId = Auth::user()->id;

        $receiver = Profiles::whereuser_id($userId)->first();

        // $users = User::whereNotIn('id', $thread->participantsUserIds($userId))->get();

        $um->markAsRead($userId, $id);

        return view('messenger.show', compact('um', 'receiver'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Receivers::wheremsgid($id)->first();
        $user->deleted = true;

        return redirect('messages');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Returns all of the latest threads by updated_at date
     *
     * @return mixed
     */
    public static function getAllLatest()
    {
        return self::latest('updated_at');
    }
}
