<header  class="app-bar" data-role="appbar">

      <a class="app-bar-element braanding txt-none-deco"  href="#">MENAHOUSE</a>
      <span class="app-bar-divider"></span>
      <ul class="app-bar-menu">
          <li><a class="txt-none-deco" href="{{url('/prodazha')}}">Продажа</a></li>
          <li><a class="txt-none-deco" href="{{url('/arenda')}}">Аренда</a></li>
      </ul>

      <div class="app-bar-pullbutton automatic"></div>
      <ul class="app-bar-menu place-right">
          @if (Auth::check())
               <li><a  class="txt-none-deco" href="{{ url('register') }}"> Привет!!  <strong>{{ Auth::user()->familia }}</strong>  <span class="sr-only">(current) </span></a></li>
               <li><a class="txt-none-deco" href="{{ url('/auth/logout') }}">Выход</a></li>

          @else
             <li><a class="txt-none-deco" href="{{ url('register') }}"> Регистрироваться  <span class="sr-only">(current)</span></a></li>
             <li><a class="txt-none-deco" href="{{ url('/auth/login') }}">Вход</a></li>
          @endif
      </ul>



        <span class="app-bar-pull"></span>

    <div style="display: none;" class="app-bar-pullbutton automatic"></div><div class="clearfix" style="width: 0;"></div><nav style="display: none;" class="app-bar-pullmenu hidden flexstyle-app-bar-menu"><ul class="app-bar-pullmenubar hidden app-bar-menu"></ul></nav></div>
</header>
