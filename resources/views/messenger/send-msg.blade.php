@extends('layouts.LayoutMailClient')
@section('title', 'Profile')

@section('content')

<div>

  <div class="grid">
      <div class="row cells24">
          <div class="cell colspan24">
              @include('flash::message')
          </div>

          @if($ums->count() > 0)
          <div class="cell colspan24">

            <h3 class="text-light">Удаленные сообщения</h3>

             <table class="table table-hover cls-table-mail">
             <thead>
             </thead>
             <tbody>
               @foreach($ums as $msg)
                     <?php $class = $msg->isUnread($userid, $msg->id) ? 'readed' : 'unread'; ?>
                             <tr class="cls-tr-table {!! $class !!}">
                                     <?php  $sender = $msg->getSenderInfos($msg->fromid); ?>
                                     <td class="cls-text-mail">

                                          <ul class="list-action">

                                              <li>
                                                <a href="{!! url('messages/'. $msg->id) !!}">
                                                    <img src="{{ asset('storage/profil').'/'.$sender->path }}" class="img-circle sender-avatar">
                                                    <a href="" >{!! $sender->familia." ".  $sender->imia !!}</a>
                                              </li>
                                              {{-- @if($class == 'readed')
                                                <li><i class="material-icons mdl-color-text--blue-grey-400" role="presentation">drafts</i></li>
                                              @else
                                                <li><i class="material-icons mdl-color-text--blue-grey-400" role="presentation">markunread</i></li>
                                              @endif
                                              <li><i class="material-icons mdl-color-text--blue-grey-400" role="presentation">bookmark_border</i></li> --}}
                                          </ul>


                                     </td>

                                       <td class="cls-text-mail">  <a href="{!! url('messages/'. $msg->id) !!}"> <p> {!! $msg->subject !!} <span> - {!! $msg->body !!} </span></p> </a></td>
                                       <td>
                                         <a href="{!! url('messages/'. $msg->id) !!}">
                                           <ul class="list-action">
                                               <li>
                                                 @if( $msg->fchiers_joints)
                                                    <i class="material-icons mdl-color-text--blue-grey-400" role="presentation">attachment</i>
                                                 @endif
                                               </li>
                                               <li><p> {!! $msg->created_at->diffForHumans() !!} </p></li>
                                           </ul>
                                         </a>
                                       </td>
                             </tr>
                
               @endforeach
            </tbody>
            </table>

           </div>
          @else
            <div class="cell colspan12">

            </div>
          @endif


      </div>
  </div>

</div>
@endsection
