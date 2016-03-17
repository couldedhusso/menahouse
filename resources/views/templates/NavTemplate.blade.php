<header class="navbar" id="top" role="banner">
    <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <div class="navbar-brand nav" id="brand">
            <a href="{{url('/')}}" > <img src="{{asset('static/assets/img/logo.png')}}" alt="Менахаус" title="Менахаус"></a>
        </div>
    </div>
    <nav class="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
        <ul class="nav navbar-nav">

            @if(Auth::check())
              {{-- <li class="has-child"><a href="#"> <div style="width:25px; height:25px;">

              </div> @include('sessions.user_img') Личный кабинет</a>
                  <ul class="child-navigation">
                      <li><a title="Копировать" href="#" class="active"><img src="assets/img/icons/Copy Link-100.png" width="15" height="15" alt=""> &nbsp; {!! Auth::user()->imia !!} &nbsp; ID: {!! Auth::user()->id  !!} </a></li>
                      <li><a href="{{ url('messages/') }}">Сообщения <span class="badge-red" align="right">@include('messenger.unread-count')</span></a></li>
                      <li><a href="{{ url('/dashboard/nedvizhimosts') }}">Мои объявления</a></li>
                      <li><a href="{{ url('user/settings/'.Auth::user()->id )}}">Настройки</a></li>
                      <li><a href="#">Оплата</a></li>
                      <li><a href="{{ url('/auth/logout') }}">Выход</a></li>
                  </ul>
              </li> --}}

              <li class="has-child"><a href="#" title="Основное личное меню пользователя"><i class="fa fa-user fa-fw"></i>&nbsp;Личный кабинет</a>
                  <ul class="child-navigation">
      <li><a href="{{ url('messages/') }}" title="Проверить новые сообщения, вам должно повезти" class="list-group-item"><i class="fa fa-envelope-o"></i>&nbsp; Сообщения мне &nbsp;<span class="badge-red" align="right">@include('messenger.unread-count')</span></a></li> <!-- CZ кол-во сообщений выводится из базы -->
      <li><a href="{{ url('/dashboard/nedvizhimosts') }}" title="Проверить и добавить новое объявление"><i class="fa fa-th-list"></i>&nbsp; Мои объявления</a></li>
                      <li><a href="#" title="Активировать дополнительные функции сайта"><i class="fa fa-rub"></i>&nbsp; Оплата</a></li>
      <li><a href="{{ url('user/settings/'.Auth::user()->id )}}" title="Настройки пользователя и сайта"><i class="fa fa-cog"></i>&nbsp; Настройки</a>
                      <li><a href="{{ url('/auth/logout') }}" title="Обязательно зайдите завтра проверить новые сообщения!"><i class="fa fa-sign-out"></i>&nbsp;Выход</a></li>
                  </ul>
              </li>

            @else
              <li><a href="{{ url('/sign-in') }}" title="Войти с помощью Вашего аккаунта">Войти &nbsp; </a>
              </li>
              <li class="activ"><a href="{{ url('sign-up') }}" title="Пройти быструю регистрацию"><strong>&nbsp;Регистрация</strong></a>
              </li>
            @endif
        </ul>
    </nav><!-- /.navbar collapse-->
    <div class="add-your-property">

      @if(Auth::check())
          <a href="{{ url('/dashboard/nedvizhimosts') }}" class="btn btn-green"><i class="fa fa-plus"></i><span class="text">Разместить объявление</span></a>
      @else
          <a href="{{ url('/auth/login') }}" class="btn btn-green"><i class="fa fa-plus"></i><span class="text">Разместить объявление</span></a>
      @endif

    </div>
</header><!-- /.navbar -->
