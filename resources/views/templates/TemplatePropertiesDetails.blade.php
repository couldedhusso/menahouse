<!DOCTYPE html>

<html lang="en-US">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="ThemeStarz">

    <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>

    <link href="{{ asset('assets/fonts/font-awesome.css') }}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{ elixir("css/all.css") }}">

    <title>@yield('Title')</title>

</head>

<body class="page-sub-page page-legal" id="page-top" ng-app="mainApp" ng-controller="mainController">
<!-- Wrapper -->
<div class="wrapper">
    <!-- Navigation -->
    <div class="navigation">
        <div class="secondary-navigation">
            <div class="container">
                <div class="contact">
                    <figure><strong>Тел.:</strong>+7 999-123-4567</figure>
                    <figure><strong>Email:</strong>mena@yandex.ru</figure>
                </div>
                <div class="user-area">
                    <div class="actions">
                      {{-- @if(Auth::check())
                         <a href="{{ url('/dashboard/advertisement/add') }}" title="Разместить объявление своей квартиры бесплатно!" class="promoted"><strong>Разместить объявление</strong></a>
                      @else
                         <a href="{{ url('/sign-in')}}" title="Разместить объявление своей квартиры бесплатно!" class="promoted"><strong>Разместить объявление</strong></a>
                      @endif    --}}
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
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

                        <li class="has-child"><a href="#" title="Основное личное меню пользователя"><i class="fa fa-user fa-fw"></i>&nbsp;Личный кабинет</a>
                            <ul class="child-navigation">
                                <li><a href="{{ url('/mailbox/inbox') }}" title="Проверить новые сообщения, вам должно повезти" class="list-group-item"><i class="fa fa-envelope-o"></i>&nbsp; Сообщения мне &nbsp;<span class="badge-red" align="right">@include('messenger.unread-count')</span></a></li> <!-- CZ кол-во сообщений выводится из базы -->
                                <li><a href="{{ url('/dashboard/advertisements') }}" title="Проверить и добавить новое объявление"><i class="fa fa-th-list"></i>&nbsp; Мои объявления</a></li>
                                {{-- <li><a href="#" title="Активировать дополнительные функции сайта"><i class="fa fa-rub"></i>&nbsp; Оплата</a></li> --}}
                                <li><a href="{{ url('dashboard/settings/'.Auth::user()->id )}}" title="Настройки пользователя и сайта"><i class="fa fa-cog"></i>&nbsp; Настройки</a>
                                <li><a href="{{ url('/auth/logout') }}" title="Обязательно зайдите завтра проверить новые сообщения!"><i class="fa fa-sign-out"></i>&nbsp;Выход</a></li>
                            </ul>
                        </li>
                        {{-- <li>
                          <a href="{{ url('/dashboard/advertisement/add') }}" class="btn btn-white-green" title="Разместить объявление своей квартиры бесплатно!"><i class="fa fa-plus"></i>&nbsp; Разместить объявление</a>
                        </li> --}}
                        <li>&nbsp;&nbsp;&nbsp;</li>
                        <a href="{{ url('/dashboard/advertisement/add') }}"  class="btn btn-white-green" title="Разместить объявление своей квартиры бесплатно!"><i class="fa fa-plus"></i>&nbsp; Разместить объявление</a>

                      @else

                <li><a href="{{ url('/sign-in') }}" title="Войти на сайт или пройти быструю регистрацию" style="margin-top: -3px; margin-right: 15px"><p><i class="fa fa-sign-in" aria-hidden="true">&nbsp; Войти </i></p></a></li>
                <a href="{{ url('/sign-in') }}" class="btn btn-white-green" title="Разместить объявление своей квартиры бесплатно!"><i class="fa fa-pencil-square-o"></i>&nbsp; Разместить объявление</a>
                      @endif

                  </ul>
                </nav><!-- /.navbar collapse-->
            </header><!-- /.navbar -->
        </div><!-- /.container -->
    </div><!-- /.navigation -->

    <!-- end Navigation -->
    <!-- Page Content -->
    <div id="page-content">
        <!-- Breadcrumb -->
        <div class="container">
            <ol class="breadcrumb">
                <li><a href="{{url('/')}}">Главная</a></li>
                @yield('active_breadcrumb')
            </ol>
        </div>
        <!-- end Breadcrumb -->

        <div class="container">
          <div class="row">
                <!-- Property Detail Content -->
                <div class="col-md-9 col-sm-9">
                    @yield('content')
                </div>

                <!-- sidebar -->
                <div class="col-md-3 col-sm-3">
                    <section id="sidebar">
                        <aside id="edit-search">
                            <header><h3>Поиск</h3></header>
                            <form role="form" id="form-sidebar" class="form-search" method="post" action="/property/catalogue">
                              <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
                              {!! csrf_field() !!}
                              <div class="form-group">
                                  <select name="status">
                                    {{-- <option value="">Статус</option> --}}
                                    <option value="Обмен">Обмен</option>
                                    <option value="Обмен_продажа">Обмен/продажа</option>
                                  </select>
                              </div><!-- /.form-group -->
                              <div class="form-group">
                                  <select name="city">
                                      <option value="">Город</option>
                                      <option value="1">Все города</option>
                                      <option value="2">Москва</option>
                                      <option value="3">Московская область</option>
                                      <option value="4">Новая Москва</option>
                                  </select>
                              </div><!-- /.form-group -->
                              <div class="form-group">
                                  <select name="district">
                                      <option value="">Округ</option>
                                      <option value="0" data-city="2">Все округа</option>
                                      <option value="1" data-city="2">Центральный</option>
                                      <option value="2" data-city="2">Северный</option>
                                      <option value="3" data-city="2">Северо-Восточный</option>
                                      <option value="4" data-city="2">Восточный</option>
                                      <option value="5" data-city="2">Юго-Восточный</option>
                                      <option value="6" data-city="2">Южный</option>
                                      <option value="7" data-city="2">Юго-Западный</option>
                                      <option value="8" data-city="2">Западный</option>
                                      <option value="9" data-city="2">Северо-Западный</option>
                                      <option value="10" data-city="2">Зеленоградский</option>
                                      <option value="11" data-city="3 4">Все районы</option>
                                      <option value="12" data-city="4">Троицкий</option>
                                  </select>
                              </div><!-- /.form-group -->
                              <div class="form-group">
                                  <select name="property-type">
                                      <option value="">Тип жилья</option>
                                      <option value="1">Квартира</option>
                                      <option value="2">Комната</option>
                                      <option value="3">Частный дом</option>
                                      <option value="4">Новостройки</option>
                                  </select>
                              </div><!-- /.form-group -->
              <div class="form-group">
                                  <select name="room">
                                      <option value="">Кол-во комнат</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4+</option>
                                      <option value="5">Студия</option>
                                  </select>
                              </div><!-- /.form-group -->
                              <div>
                            <div class="slider" style="margin-top: 8px; border: 1px solid #d2d2d2">
                                <span style="font-weight:bold; margin-left: 8px;" >Площадь</span>
                                <div range-slider min="1" attach-handle-values="true" max="200" model-min="range.min" model-max="range.max"></div>
                                <div style="margin:1em; display:table;">
                                    <div class="slider-control">
                                        <span>От:</span>
                                        <input style="height:25px" type="number" class="" name="rangeMin" ng-model="range.min">
                                        <label>м2</label>
                                    </div>
                                    <div class="slider-control">
                                        <span>До:</span>
                                        <input type="number" class="" name="rangeMax" ng-model="range.max">
                                        <label>м2</label>
                                    </div>
                                </div>
                            </div>

                          </div>
                            <hr>
                                    <p>Критерии обмена</P>
                            <div class="form-group">
                                <select name="form-sale-area">
                                    <option value="">Обмен на</option>
                                    <option value="1">На увеличение</option>
                                    <option value="2">На уменьшение</option>
                                </select>
                            </div><!-- /.form-group -->
                            <div class="form-group">
                                <select name="form-sale-area">
                                    <option value="">Район обмена</option>
                                    <option value="1">В другом районе</option>
                                    <option value="2">В своём районе</option>
                                </select>
                            </div><!-- /.form-group -->

                              <div class="form-group">
                                  <button type="submit" class="btn btn-default">Искать</button>
                              </div><!-- /.form-group -->
                          </form><!-- /#form-map -->
                        </aside><!-- /#edit-search -->
                        {{-- <aside id="featured-properties">
                            <header><h3>Спецпредложения</h3></header>
                            <div class="property small">
                                <a href="property-detail.html">
                                    <div class="property-image">
                                      <img alt="" src="{{asset('assets/img/properties/property-06.jpg')}}">
                                    </div>
                                </a>
                                <div class="info">
                                    <a href="property-detail.html"><h4>2х комн.</h4></a>  <!-- CZ индивидуальная ссылка объявления -->
                                    <figure>м.Маяковская </figure>
                                    <div class="tag price">7 000 000</div>
                                </div>
                            </div><!-- /.property -->
                            <div class="property small">
                                <a href="property-detail.html">
                                    <div class="property-image">
                                        <img alt="" src="assets/img/properties/property-09.jpg">
                                    </div>
                                </a>
                                <div class="info">
                                    <a href="property-detail.html"><h4>3х комн.</h4></a>
                                    <figure>м.Шоссе Энтузиастов</figure>
                                    <div class="tag price">6 540 000</div>
                                </div>
                            </div><!-- /.property -->
                            <div class="property small">
                                <a href="property-detail.html">
                                    <div class="property-image">
                                        <img alt="" src="assets/img/properties/property-03.jpg">
                                    </div>
                                </a>
                                <div class="info">
                                    <a href="property-detail.html"><h4>1 комн.</h4></a>
                                    <figure>м.Пушкинская</figure>
                                    <div class="tag price">9 000 000</div>
                                </div>
                            </div><!-- /.property -->
                        </aside><!-- /#featured-properties --> --}}
                        <aside id="our-guides">
                            <header><h3>Почему мы?</h3></header>
                            <a href="#" class="universal-button">
                                <figure class="fa fa-home"></figure>
                                <span>Честный обмен</span>
                                <span class="arrow fa fa-angle-right"></span>
                            </a><!-- /.universal-button -->
                            <a href="#" class="universal-button">
                                <figure class="fa fa-umbrella"></figure>
                                <span>Юридическая информация</span>
                                <span class="arrow fa fa-angle-right"></span>
                            </a><!-- /.universal-button -->
                        </aside><!-- /#our-guide -->
                    </section><!-- /#sidebar -->
                </div><!-- /.col-md-3 -->
                <!-- end Sidebar -->
          </div>
        </div><!-- /.container -->
    </div>
    <!-- end Page Content -->
    <!-- Page Footer -->
    <footer id="page-footer">
        <div class="inner">
            <aside id="footer-main">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <article>
                                <h3>Информация</h3>
                                <p>Дополнительная информация по сайту<br>
								можно дать список популярный станций метро в пару столбиков<br>
								или другую необходимую SEO информацию
                                </p>
                                <hr>
                                <a href="#" class="link-arrow">продолжить</a>
                            </article>
                        </div><!-- /.col-sm-6 -->
                        <div class="col-md-3 col-sm-3">
                            <article>
                                <h3>Контакты</h3>
                                <address>
                                    <strong>Mena</strong><br>
                                    физический адрес<br>
                                    юридический адрес
                                </address>
                                +7 (999) 123-4567<br>
								+7 (999) 123-4566<br>
                                <a href="#">mena@example.com</a>
                            </article>
                        </div><!-- /.col-sm-3 -->
                        <div class="col-md-3 col-sm-3">
                            <article>
                                <h3>Меню</h3>
                                <ul class="list-unstyled list-links">
                                    <li><a href="#">Карта сайта</a></li>
                                    <li><a href="#">Поиск по карте</a></li>
                                    <li><a href="#">Спецпредложения</a></li>
                                    <li><a href="#">Честный обмен</a></li>
                                    <li><a href="#">Подбор ипотеки</a></li>
                                </ul>
                            </article>
                        </div><!-- /.col-sm-3 -->
                    </div><!-- /.row -->
                </div><!-- /.container -->
            </aside><!-- /#footer-main -->
            <aside id="footer-thumbnails" class="footer-thumbnails"></aside><!-- /#footer-thumbnails -->
            <aside id="footer-copyright">
                <div class="container">
                    <span>RADEXO Copyright © 2015. All Rights Reserved.</span>
                    <span class="pull-right"><a href="#page-top" class="roll"><i class="fa fa-arrow-up">&nbsp; вернуться</i></a></span>
                </div>
            </aside>
        </div><!-- /.inner -->
    </footer>
    <!-- end Page Footer -->
</div>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&libraries=places"></script>
<script type="text/javascript" src="{{asset('static/assets/js/draggable-0.1.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/jshashtable-2.1_src.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/jquery.numberformatter-1.2.3.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/tmpl.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/jquery.dependClass-0.1.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/jquery.slider.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/jquery-2.1.0.min.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/jquery-migrate-1.2.1.min.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/bootstrap/js/bootstrap.min.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/smoothscroll.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/bootstrap-select.min.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/jquery.validate.min.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/icheck.min.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/retina-1.1.0.min.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/js/markerwithlabel_packed.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/js/fileinput.min.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/js/custom-map.js')}}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/custom.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/angular/vendor/angular.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/js/sm.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/js/angular.rangeSlider.js')}} "></script>
<script>
    angular.module("mainApp", ["ui-rangeSlider"]).controller("mainController", function ($scope) {
    $scope.range = { min: 5, max: 170 };
});
</script>

<!--[if gt IE 8]>
<script type="text/javascript" src="{{asset('static/assets/js/ie.js')}}"></script>
<![endif]-->

<!--[if gt IE 8]>
<script type="text/javascript" src="assets/js/ie.js"></script>
<![endif]-->
<script type="text/javascript">
    var propertyId = 0;
    google.maps.event.addDomListener(window, 'load', initMap(propertyId));
    $(window).load(function(){
        initializeOwl(false);
    });
</script>

</body>
</html>
