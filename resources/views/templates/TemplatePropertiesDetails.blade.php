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

<body class="page-sub-page page-legal" id="page-top">
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
                      @if(Auth::check())
                         <a href="{{ url('/dashboard/advertisement/add') }}" title="Разместить объявление своей квартиры бесплатно!" class="promoted"><strong>Разместить объявление</strong></a>
                      @else
                         <a href="{{ url('/sign-in')}}" title="Разместить объявление своей квартиры бесплатно!" class="promoted"><strong>Разместить объявление</strong></a>
                      @endif                    </div>
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
                  <li><a href="{{ url('messages/') }}" title="Проверить новые сообщения, вам должно повезти" class="list-group-item"><i class="fa fa-envelope-o"></i>&nbsp; Сообщения мне &nbsp;<span class="badge-red" align="right">@include('messenger.unread-count')</span></a></li> <!-- CZ кол-во сообщений выводится из базы -->
                  <li><a href="{{ url('/dashboard/advertisements') }}" title="Проверить и добавить новое объявление"><i class="fa fa-th-list"></i>&nbsp; Мои объявления</a></li>
                                  <li><a href="#" title="Активировать дополнительные функции сайта"><i class="fa fa-rub"></i>&nbsp; Оплата</a></li>
                  <li><a href="{{ url('dashboard/settings/'.Auth::user()->id )}}" title="Настройки пользователя и сайта"><i class="fa fa-cog"></i>&nbsp; Настройки</a>
                                  <li><a href="{{ url('/auth/logout') }}" title="Обязательно зайдите завтра проверить новые сообщения!"><i class="fa fa-sign-out"></i>&nbsp;Выход</a></li>
                              </ul>
                          </li>

                        @else
                          <li><a href="{{ url('/sign-in') }}" title="Войти с помощью Вашего аккаунта">Войти &nbsp; </a>
                          </li>
                          <li class="activ"><a href="{{ url('/join') }}" title="Пройти быструю регистрацию"><strong>&nbsp;Регистрация</strong></a>
                          </li>
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
                            <form role="form" id="form-sidebar" class="form-search" action="properties-listing.html">
                                <div class="form-group">
                                    <select name="district">
										                    <option value="0">Обмен</option>
                                        <option value="1">Обмен/продажа</option>
                                    </select>
                                </div><!-- /.form-group -->
                                <div class="form-group">
                                    <select name="city">
                                        <option value="">Город</option>
                                        <option value="Москва">Москва</option>
                                        <option value="Московская область">Московская область</option>
                                        <option value="3=Новая Москва">Новая Москва</option>
                                    </select>
                                </div><!-- /.form-group -->
                                <div class="form-group">
                                    <select name="district">
                                        <option value="">Район</option>
										                    <option value="0">Все районы</option>
                                        <option value="ЦАО">ЦАО</option>
                                        <option value="ЗАО">ЗАО</option>
                                        <option value="ЮАО">ЮАО</option>
                                        <option value="ВАО">ВАО</option>
                                        <option value="САО">САО</option>
                                    </select>
                                </div><!-- /.form-group -->
                                <div class="form-group">
                                    <select name="property-type">
                                        <option value="">Тип жилья</option>
                                        <option value="Комната">Комната</option>
                                        <option value="Квартира">Квартира</option>
                                        <option value="Частный дом">Частный дом</option>
                                        <option value="Новостройки">Новостройки</option>
                                    </select>
                                </div><!-- /.form-group -->
								<div class="form-group">
                                    <select name="form-sale-room">
                                        <option value="">Кол-во комнат</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4+</option>
                                    </select>
                                </div><!-- /.form-group -->
								<div class="form-group">
                                    <select name="form-sale-area">
                                        <option value="">Площадь</option>
                                        <option value="1">30-70 +</option>
                                        <option value="2">70-90 +</option>
                                        <option value="3">90-110 +</option>
                                        <option value="4">110 +</option>
                                    </select>
                                </div><!-- /.form-group -->
								<p>Критерии обмена</P>
								<div class="form-group">
                                    <select name="form-sale-area">
                                        <option value="">Обмен на</option>
                                        <option value="На увеличение">На увеличение</option>
                                        <option value="На уменьшение">На уменьшение</option>
                                    </select>
                                </div><!-- /.form-group -->
								<div class="form-group">
                                    <select name="form-sale-area">
                                        <option value="">Район обмена</option>
                                        <option value="В другом районе">В другом районе</option>
                                        <option value="В своём районе">В своём районе</option>
                                    </select>
                                </div><!-- /.form-group -->

                                <div class="form-group">
                                    <button type="submit" class="btn btn-default">Искать</button>
                                </div><!-- /.form-group -->
                            </form><!-- /#form-map -->
                        </aside><!-- /#edit-search -->
                        <aside id="featured-properties">
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
                        </aside><!-- /#featured-properties -->
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
