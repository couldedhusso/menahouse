
@extends('templates.TemplateMailbox')

@section('Title')
  Mena | Mailbox
@endsection

@section('active_breadcrumb')
  <li><a href="{{url('mailbox/inbox')}}">Сообщения</a></li>
  <li class="active">Подробнее</li>
@endsection

@section('sidebar')
  @include('layouts.partials.sidebar-mailbox')
@endsection

@section('content')
  <!-- Message -->
                  <div class="col-lg-9 col-sm-9">
                  <div class="mail-box-header">
                      <div class="pull-right">
                          <a href="mail_compose.html" class="btn btn-white2-sm" title="Ответить"><i class="fa fa-reply"></i> Ответить</a>
                          <a href="#" class="btn btn-white-red"title="Добавить в избранное"><i class="fa fa-heart-o"></i> </a>
                          <a href="mailbox.html" class="btn btn-white-grey" title="Удалить"><i class="fa fa-trash-o"></i> </a>
                          <a href="#" class="btn btn-white-grey" title="Пожаловаться"><i class="fa fa-bug"></i> </a>
                      </div>
                      <h3>
                          Подробности сообщения
                      </h3>
                       <?php  $sender = $usermessage->getSenderInfos($usermessage->fromid); ?>
                      <div class="mail-tools">
                          <h4>
                            <span class="font-noraml">От: </span>{{$sender}}
                          </h4>
                          <h5>
                              <span class="pull-right font-noraml">{{$usermessage->created_at}}</span>
                              <span class="font-noraml">Объявление: &nbsp;</span> <a href="property-detail.html" title="Открыть объявление адресата"><i class="fa fa-map-marker"></i> ул. Шоссе Энтузиастов, д.147</i> </a>
                          </h5>
                      </div>
                  </div>
                  <hr>
                      <div class="mail-box">


                      <div class="mail-body">
                              {{$usermessage->body}}
                              <hr>
                      </div>
                          <div class="mail-attachment">
                              <div class="attachment">
                                      <div class="file">
                                          <a href="#">
                                              <div class="icon">
                                                  <i class="fa fa-file"></i>
                                              </div>
                                              <div class="file-name">
                                                  img1.jpg
                                              </div>
                                          </a>
                                      </div>
                                      <div class="file">
                                          <a href="#">
                                              <div class="image">
                                                  <img alt="image" src="assets\img\icons\Circled User Male-100.png">
                                              </div>
                                              <div class="file-name">
                                                  user.png
                                              </div>
                                          </a>
                                      </div>
                                  <div class="clearfix"></div>
                              </div>
                              </div>
                              <div class="mail-body text-right">
                                      <a class="btn btn-white2" href="mail_compose.html"><i class="fa fa-reply"></i>&nbsp; Ответить на сообщение</a>
                                      <a class="btn btn-white-grey" href="#"><i class="fa fa-arrow-right"></i> Заключить сделку</a>
                              </div>
                            </br>
                              <div class="clearfix"></div>

                      </div>
                  </div>
  <!-- end Message -->
@endsection
