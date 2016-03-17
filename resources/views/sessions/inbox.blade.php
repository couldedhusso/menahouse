@extends('layouts.LayoutMailClient')
@section('title', 'Profile')

@section('content')

<div>

  <div class="grid">
      <div class="row cells24">
          <div class="cell colspan24">
              @include('flash::message')
          </div>

          @if($ums !==  null )
            <div class="cell colspan24">

            <h3 class="text-light">Входящие сообщения</h3>

             <table class="table table-hover cls-table-mail">
             <thead>
             </thead>
             <tbody>
               @foreach($ums as $msg)
                   @if(!$msg->isDeleted($userid, $msg->id) )
                         <?php $class = $msg->isUnread($userid, $msg->id) ? 'readed' : 'unread'; ?>
                             <tr class="cls-tr-table {!! $class !!}">

                                     <?php  $sender = $msg->getSenderInfos($msg->fromid); ?>
                                     <td class="cls-text-mail">
                                          <ul class="list-action">
                                              <li>
                                                <a href="{!! url('messages/'.$msg->id) !!}">
                                                    <img src="{{ asset('storage/profil').'/'.$sender->path }}" class="img-circle sender-avatar">
                                                    <a href="" class="dropdown-toggle">{!! $sender->familia." ".  $sender->imia !!}</a>
                                                       <ul class="d-menu" data-role="dropdown">
                                                         <li><a href="">Добавить в избранное </a>
                                                           {!! Form::open(array('route' => 'reply_msg', 'method' => 'post')) !!}
                                                                 <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
                                                                 <input name="msg_id" type="hidden" value="{!!$msg->id !!}" />
                                                           {!! Form::close() !!}
                                                         </li>
                                                         <li>
                                                           {!! Form::open(array('route' => 'reply_msg', 'method' => 'post')) !!}
                                                                 <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
                                                                 <input name="msg_id" type="hidden" value="{!!$msg->id !!}" />
                                                                 <a href=""> <input type="submit" value="Удалить"></a>

                                                           {!! Form::close() !!}
                                                         </li>
                                                       </ul>
                                                   </a>
                                              </li>
                                              @if($class == 'readed')
                                                <li><i class="material-icons mdl-color-text--blue-grey-400" role="presentation">drafts</i></li>
                                              @else
                                                <li><i class="material-icons mdl-color-text--blue-grey-400" role="presentation">markunread</i></li>
                                              @endif
                                              <li><i class="material-icons mdl-color-text--blue-grey-400" role="presentation">bookmark_border</i></li>
                                          </ul>


                                     </td>

                                       <td class="cls-text-mail">  <a href="{!! url('messages/'. $msg->id) !!}"> <p> {!! $msg->subject !!} <span> - {!! $msg->body !!} </span></p> </a></td>
                                       <td>
                                         <a href="{!! url('messages/'. $msg->id) !!}">
                                           <ul class="list-action">
                                               @if($piece_jointes[$msg->id] == "true")
                                                   <li>
                                                     <i class="material-icons mdl-color-text--blue-grey-400" role="presentation">attachment</i>
                                                   </li>
                                                   <li><p> {!! $msg->created_at->diffForHumans() !!} </p></li>
                                                @else
                                                <li>
                                                  <i class="material-icons mdl-color-text--blue-grey-400" role="presentation"></i>
                                                </li>
                                                  <li><p class="place-right"> {!! $msg->created_at->diffForHumans() !!} </p></li>
                                                @endif

                                           </ul>
                                         </a>
                                       </td>
                             </tr>
                    @endif

               @endforeach
            </tbody>
            </table>

           </div>
          @else
            <div class="cell colspan12">
                <p> У вас пока нет сообщений </p>
            </div>
          @endif


      </div>
  </div>

</div>
@endsection
