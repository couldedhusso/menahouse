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
use App\Obivlenie;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;

use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image ;
use Illuminate\Filesystem\FileNotFoundException;

use Menahouse\CustomHelper;


class UserMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $show_link = false;
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
                                    ->orderBy('created_at', 'desc')
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
        $flag = "inbox";
        return view('sessions.inbox', compact('usermessages', 'mailcount', 'userid', 'flag', 'show_link'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function sent()
    {

      $messagesSent = UserMessage::where('fromid', '=', Auth::user()->id)
                                  ->orderBy('created_at', 'desc')
                                  ->get();
      $flag = "sent";
      return view('messenger.sent', compact('messagesSent', 'flag'));
    }

    public function trash()
    {

      $receiverMsgId = Receiver::wheretoid(Auth::user()->id)
                                ->where('deleted', '=', '1')
                                ->pluck('msgid')
                                ->toArray();

      $messagesDel = UserMessage::whereIn('id', $receiverMsgId)
                                  ->orderBy('id', 'desc')
                                  ->get();
      $flag = "deleted";
      return view('messenger.deleted-msg', compact('messagesDel', 'flag'));
    }

    public function liked(){
      $receiverMsgId = Receiver::wheretoid(Auth::user()->id)
                                ->where('favoris', '=', '1')
                                ->pluck('msgid')
                                ->toArray();

      $messagesLiked = UserMessage::whereIn('id', $receiverMsgId)
                                  ->orderBy('created_at', 'desc')
                                  ->get();
      $flag = "liked";
      return view('messenger.liked', compact('messagesLiked', 'flag'));

    }
    public function create()
    {
        $user = User::whereid(Auth::user()->id)->first();
        $umail = $user->email ;
        $flag ="new";
        return view('messenger.compose', compact('umail', 'flag'));
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

        $To = Input::get('To');

        $sender = Auth::user()->id;
        $receiver = User::whereid(Input::get('To'))->first();


        if ($sender == $receiver->id) {
           return redirect()->back();
        }


        try
        {
            $haveHouse = Obivlenie::whereid($To)->firstOrFail();

            // $conversation = Conversation::create(['subject' => Input::get('subject')]);

            $um = UserMessage::create([
                'subject' => Input::get('subject'),
                'fromid' => Auth::user()->id,
                'toid' => $To,
                'id_obivlenie' => Input::get('id_obivlenie'),
                'id_conversation' => Input::get('id_obivlenie'),
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
        }
        catch (ModelNotFoundException $e){
            Session::flash('flash_message', 'Чтобы писать владельцу
                                            надо иметь квартиру.');

            return redirect()->back();
        }


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

        $user = Auth::user();

        $ch = new CustomHelper ;

        if ($ch->getUserPlanPass($user)) {


        try {
            $usermessage = UserMessage::whereid($id)->first();

        } catch (ModelNotFoundException $e) {
            Session::flash('error_message', 'The thread with ID: ' . $id . ' was not found.');
            return redirect('messages');
        }

        // $users = User::whereNotIn('id', $thread->participantsUserIds($userId))->get();
        // $ = Profiles::whereuser_id($userId)->first();
        $house = Obivlenie::where('id', '=', $usermessage->id_conversation)
                                                            ->with('images')
                                                            ->first();


        // si le message est destine a l user alors marquer comme lu et
        // afficher le message
        if ($userId == $usermessage->toid) {
          $usermessage->markAsRead($userId, $id);
        }
        $flag = "show";
        return view('messenger.show', compact('usermessage', 'house', 'flag'));
      }

      return redirect()->back();
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
