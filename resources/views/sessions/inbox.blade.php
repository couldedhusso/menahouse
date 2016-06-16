@extends('templates.TemplateMailbox')

@section('Title')
  Mena | Mailbox
@endsection

@section('active_breadcrumb')
  <li><a href="#">Сообщения</a></li>
  <li class="active">Входящие</li>
@endsection

@section('sidebar')
  @include('layouts.partials.sidebar-mailbox')
@endsection

@section('content')
  <!-- My Properties -->
             <div class="col-lg-9 col-sm-3">
             <div class="mail-box-header">

                 <h2>
                     Входящие (@include('messenger.unread-count'))
                 </h2>
                 <div class="mail-tools">
                     <div class="btn-group pull-right">
                         <button class="btn btn-white btn-sm"><i class="fa fa-arrow-left"></i></button>
                         <button class="btn btn-white btn-sm"><i class="fa fa-arrow-right"></i></button>
                     </div>
                 </div>
             </div>
                 <div class="mail-box">
                 <table class="table table-hover table-mail">
                   <tbody>
                     @foreach($usermessages as $umsge)
                       <?php  $sender = $umsge->getSenderInfos($umsge->fromid); ?>
                       @if($umsge->isUnread($userid, $umsge->id))
                         <tr class="unread">
                             <td class="check-mail">
                                 <input type="checkbox" class="i-checks">
                             </td>

                             <td class="mail-contact"><a href="{{url("/mailbox/inbox/".$umsge->id)}}">{{$sender}}</a></td>
                             <td class="mail-subject"><a href="{{url("/mailbox/inbox/".$umsge->id)}}">
                               <?php
                                  $str = $umsge->body;
                                  $lenStr = strlen($str);
                                  echo mb_strimwidth($str, 0, $lenStr/3, " ...");
                               ?>
                             </a></td>
                             <td class=""><i class="fa fa-paperclip"></i></td>
                             <td class="text-right mail-date">{{$umsge->created_at->format('d.m')}}</td>
                         </tr>
                       @else
                         <tr class="read">
                             <td class="check-mail">
                                 <input type="checkbox" class="i-checks">
                             </td>
                             <td class="mail-contact"><a href="{{url("/mailbox/inbox/".$umsge->id)}}" >{{$sender}}</a></td>
                             <td class="mail-subject"><a href="{{url("/mailbox/inbox/".$umsge->id)}}" >
                               <?php
                                  $str = $umsge->body;
                                  $lenStr = strlen($str);
                                  echo mb_strimwidth($str, 0, $lenStr/3, " ...");
                                ?>
                             </a></td>
                             <td class=""><i class="fa fa-paperclip"></i></td>
                             <td class="text-right mail-date">{{$umsge->created_at->format('d.m')}}</td>
                         </tr>
                       @endif
                     @endforeach
                   </tbody>
                 </table>


                 </div>
             </div>
             <!-- end My Properties -->
@endsection
