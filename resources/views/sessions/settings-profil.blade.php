@extends('templates.TemplateDashboard')
@section('Title')
  Mena | Profile
@endsection

@section('active_breadcrumb')
  <li><a>Аккаунт</a></li>
  <li class="active">Настройки</li>
@endsection

@section('sidebar')
  @include('layouts.partials.sidebar-settings')
@endsection

@section('content')
    <section id="profile">
      <header>
        <h1>Персональные настройки</h1></header>

      <div class="account-profile">
        <div class="row">
          <div class="col-md-3 col-sm-3">
            <img alt="" class="image" src="{{asset('assets/img/agent-01.jpg')}}">
            <div class="center">
              <div class="form-group">
                <input id="file-upload" type="file" class="file" multiple="true" data-show-upload="false" data-show-caption="false" data-show-remove="false" accept="image/jpeg,image/png" data-browse-class="btn btn-default-small" data-browse-label="Выбрать файл">
                <figure class="note"><strong>Совет: </strong>Загрузите изображение формата jpeg или png!</figure>
              </div>
            </div>
          </div>
          <div class="col-md-9 col-sm-9">
            {!! Form::open(array('route' => 'dashboard.settings', 'method' => 'post')) !!}
                <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
                <input name="user_id" type="hidden" value="{!! $user->id !!}" />

              <section id="contact">
                <h3>Контакты</h3>
                <dl class="contact-fields">
                  <dt><label for="imia">Ваше имя:</label></dt>
                  <dd>
                    <div class="form-group">
                      <input type="text" class="form-control" id="imia" name="imia" required value="{{$user->imia.' '.$user->familia }}">
                    </div>
                    <!-- /.form-group -->
                  </dd>
                  <dt><label for="form-account-phone">Номер телефона:</label></dt>
                  <dd>
                    <div class="form-group">
                      <input type="text" class="form-control" id="form-account-phone" name="form-account-phone" value="{{$user->phonenumber}}">
                    </div>
                    <!-- /.form-group -->
                  </dd>
                  <dt><label for="form-account-email">Email:</label></dt>
                  <dd>
                    <div class="form-group">
                      <input type="text" class="form-control" id="form-account-email" name="form-account-phone" value="{{$user->email}}">
                    </div>
                    <!-- /.form-group -->
                  </dd>
                </dl>
              </section>
              <section id="about-me">
                <h3>Краткая информация</h3>
                <div class="form-group">

                  <textarea class="form-control" id="form-contact-agent-message" rows="5" name="bio">
                  {{$userprofile->bio}}
                  </textarea>
                </div>
                <!-- /.form-group -->
              </section>
              <section id="social">
                <h3>Социальные сети</h3>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-vk"></i></span>
                    <input type="text" class="form-control" id="account-social-vk" name="vk" value="{{$userprofile->vk }}">
                  </div>
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-odnoklassniki"></i></span>
                    <input type="text" class="form-control" id="account-social-odnoklassniki" name="ok" value="{{$userprofile->ok }}">
                  </div>
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-facebook"></i></span>
                    <input type="text" class="form-control" id="account-social-facebook" name="fb" value="{{$userprofile->fb }}">
                  </div>
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-twitter"></i></span>
                    <input type="text" class="form-control" id="account-social-twitter" name="twitter" value="{{$userprofile->twitter }}">
                  </div>
                </div>
                <!-- /.form-group -->
                <div class="form-group clearfix">
                  <button type="submit" class="btn pull-right btn-default" id="account-submit">Сохранить</button>
                </div>
                <!-- /.form-group -->
              </section>
            {!! Form::close() !!}

            <!-- /#form-contact -->
            <div class="block clearfix">
              <section id="change-password">
                <header>
                  <h2>Изменить пароль</h2></header>
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    {!! Form::model($user, array('route' => 'password_edit', 'method' => 'post')) !!}
                        <input name="_token" type="hidden" value="{!! csrf_token() !!}" />

                         <!-- user id -->
                         <input name="user_id" type="hidden" value="{!! $user->id !!}" />


                        <div class="form-group">
                          <label for="form-account-password-current">Текущий пароль</label>
                          <input type="password" class="form-control" id="form-account-password-current" name="form-account-password-current">
                        </div>
                        <!-- /.form-group -->
                        <div class="form-group">
                          <label for="form-account-password-new">Новый пароль</label>
                          <input type="password" class="form-control" id="form-account-password-new" name="form-account-password-new">
                        </div>
                        <!-- /.form-group -->
                        <div class="form-group">
                          <label for="form-account-password-confirm-new">Подтверждение пароля</label>
                          <input type="password" class="form-control" id="form-account-password-confirm-new" name="form-account-password-confirm-new">
                        </div>
                        <!-- /.form-group -->
                        <div class="form-group clearfix">
                          <button type="submit" class="btn btn-default" id="form-account-password-submit">Изменить пароль</button>
                        </div>
                        <!-- /.form-group -->
                  {!! Form::close() !!}
                    <!-- /#form-account-password -->
                  </div>
                  <div class="col-md-6 col-sm-6">
                    @if(Session::has('message'))
                      <strong>Совет:</strong>
                      <p>  @include('flash::message') </p>
                    @endif
                  </div>
                </div>
              </section>
            </div>
          </div>
          <!-- /.col-md-9 -->
        </div>
        <!-- /.row -->
      </div>

      <!-- /.account-profile -->
    </section>
    <!-- /#profile -->
@endsection
