@extends('templates.TemplateMailbox')

@section('Title')
  Mena | Mailbox
@endsection

@section('active_breadcrumb')
  <li><a href="#">Сообщения</a></li>
  <li class="active">Удалёные</li>
@endsection

@section('sidebar')
  @include('layouts.partials.sidebar-mailbox')
@endsection

@section('content')
  <!-- My Properties -->
             <div class="col-lg-9 col-sm-3">
                 <div class="mail-box-header">
                     <h2>
                         Исходящие сообщения
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
                       @foreach($messagesSent as $umsge)

                           <tr class="read">
                               {{-- <td class="check-mail">
                                   <input type="checkbox" class="i-checks">
                               </td> --}}
                               <td class="mail-contact">Кому : <a href="{{url("/mailbox/inbox/".$umsge->id)}}" > <?php  echo  $umsge->getSenderInfos($umsge->toid); ?> </a></td>
                               <td class="mail-subject"><a href="{{url("/mailbox/inbox/".$umsge->id)}}" >
                                 <?php
                                    $str = $umsge->body;
                                    $lenStr = strlen($str);
                                    echo mb_strimwidth($str, 0, $lenStr/3, " ...");
                                  ?>
                               </a></td>
                               <td class="text-right mail-date">{{$umsge->created_at->format('d.m')}}</td>
                           </tr>
                       @endforeach
                     </tbody>
                   </table>
                   </div>
             </div>
             <!-- end My Properties -->
@endsection
