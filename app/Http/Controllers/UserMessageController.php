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
        // $receivers = Receiver::wheretoid($userid)
        //                       ->lists('readed', 'msgid')
        //                       ->toArray();

        // recuperer ts les msges non lus, pas dans la liste de spams et non supprimes
        $receiverMsgId = Receiver::wheretoid($userid)
                                  ->where('spam', '=', '0')
                                  ->where('deleted', '=', '0')
                                  ->pluck('msgid')
                                  ->toArray();

        $usermessages = UserMessage::whereIn('id', $receiverMsgId)
                                    ->orderBy('id', 'desc')
                                    ->get();

        // foreach ($ums as $um) {
        //   if ($um->created_at > $receivers[$um->id]) {
        //       $newMessageCount[] = $um->id ;
        //   }
        // }
        //  $piece_jointes  = array();
        // foreach ($ums as $um) {
        //   if ($um->fichiers_joints == "1") {
        //     $piece_jointes[$um->id] = "true";
        //   } else {
        //     $piece_jointes[$um->id] = "false";
        //   }
          // if (! $receivers[$um->id]) {
          //     $newMessageCount[] = $um->id ;
          // }
        // }

        // dd(count($newMessageCount));
        $mailcount = count($usermessages);

        return view('sessions.inbox', compact('usermessages', 'mailcount', 'userid'));

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

        // TODO :
        //   1-recuperer les donees du cache de donnees
        //   2-envoie asynchrone de messsage

        $sender = Auth::user()->id;
        $receiver = User::whereid(Input::get('To'))->first();

        // $conversation = Conversation::create(['subject' => Input::get('subject')]);

        $um = UserMessage::create([
            'subject' => Input::get('subject'),
            'fromid' => Auth::user()->id,
            'toid' => Input::get('To'),
            'body' => Input::get('form-message')
        ]);

        $receiver = Receiver::create([
          'toid' => Input::get('To'),
          'msgid' => $um->id,
          'last_read' => Carbon::now()
        ]);

        $sender = Sender::create([
          'userid' => Auth::user()->id,
          'msgid' =>  $um->id
        ]);


       // ==== TO DO : return to list found items
       return redirect('mailbox/inbox');
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

            $usermessage = UserMessage::whereid($id)->first();

        } catch (ModelNotFoundException $e) {
            Session::flash('error_message', 'The thread with ID: ' . $id . ' was not found.');
            return redirect('messages');
        }

        // $users = User::whereNotIn('id', $thread->participantsUserIds($userId))->get();
        $userId = Auth::user()->id;
        $receiver = Profiles::whereuser_id($userId)->first();
        $usermessage->markAsRead($userId, $id);

        return view('messenger.show', compact('usermessage'));
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
