<!DOCTYPE html>

<html lang="en-US">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="ThemeStarz">

    <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
    <link href="{{ asset('static/assets/fonts/font-awesome.css') }}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{ asset('static/assets/bootstrap/css/bootstrap.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('static/assets/css/bootstrap-select.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('static/assets/css/magnific-popup.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('static/assets/css/jquery.slider.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('static/assets/css/owl.carousel.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('static/assets/css/style.css') }}" type="text/css">

    <title>Mena | Terms & Conditions</title>

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
                         <a href="{{ url('/dashboard/nedvizhimosts') }}" title="Разместить объявление своей квартиры бесплатно!" class="promoted"><strong>Разместить объявление</strong></a>
                      @else
                         <a href="{{ url('/sign-in')}}" title="Разместить объявление своей квартиры бесплатно!" class="promoted"><strong>Разместить объявление</strong></a>
                      @endif
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
                        <a href="#"> <img src="{{asset('static/assets/img/logo.png')}}" alt="Менахаус" title="Менахаус"></a>
                    </div>
                </div>
                <nav class="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
                  <ul class="nav navbar-nav">
                      <li class="has-child"><a href="#" title="Раздел помощи"> Помощь</a>
                          <ul class="child-navigation">
                              <li><a href="landingpage.html">Почему мы?</a></li><!-- Почему работать с нами? -->
                              <li><a href="terms-conditions.html">Правила сайта</a></li>
                              <li><a href="faq.html">Справка</a></li>
                          </ul>
                      </li>
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
                <li><a href="index.html">Главная</a></li>

                @yield('active_breadcrumb')
            </ol>
        </div>
        <!-- end Breadcrumb -->

        <div class="container">
            @yield('content')
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
<script type="text/javascript" src="{{asset('static/assets/js/custom.js')}}"></script>
<!--[if gt IE 8]>
<script type="text/javascript" src="{{asset('static/assets/js/ie.js')}}"></script>
<![endif]-->

</body>
</html>
