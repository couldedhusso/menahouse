<!DOCTYPE html>

<html lang="en-US">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="ThemeStarz">

    <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
    <link href="assets/fonts/font-awesome.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{ elixir("css/all.css") }}">

    <title>Mena | Price</title>

</head>

<body class="page-sub-page page-submit" id="page-top">
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
                {{-- <div class="add-your-property">

                  @if(Auth::check())
                      <a href="{{ url('/dashboard/advertisement/add') }}" class="btn btn-green"><i class="fa fa-plus"></i><span class="text">Разместить объявление</span></a>
                  @else
                      <a href="{{ url('/auth/login') }}" class="btn btn-green"><i class="fa fa-plus"></i><span class="text">Разместить объявление</span></a>
                  @endif

                </div> --}}
            </header><!-- /.navbar -->
        </div><!-- /.container -->
    </div><!-- /.navigation -->
    <!-- end Navigation -->
    <!-- Page Content -->
    <div id="page-content">
        <!-- Breadcrumb -->
        <div class="container">
            <ol class="breadcrumb">
                <li><a href="{{ url('/') }}">Главная</a></li>
                <li class="active">Тарифный план</li>
            </ol>
        </div>
        <!-- end Breadcrumb -->


        {{-- TODO : generer une url en fonction du tarif plan choisi --}}

        <div class="container">
            <header><h1>Выберите один из вариантов подписки</h1></header>
            <div class="row">
                <!-- Submit-->
                <div class="col-md-9 col-sm-9">
                    <section id="submit" class="submit">
                        <section id="select-package">
                            <div class="table-responsive submit-pricing">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>Ваш пакет услуг:</th>
                                        <th class="title">Free</th>
                                        <th class="title">Silver</th>
                                        <th class="title">Gold</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="prices">
                                        <td></td>
                                        <td><b>Бесплатно</b></td>
                                        <td><b>1070 рублей/мес</b></td>
                                        <td><b>2070 рублей/мес</b></td>
                                    </tr>
                                    <tr>
                                        <td>Количество объявлений</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Приоритетная техподдержка</td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Безопасность данных</td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Рекомендации (в разработке)</td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Почтовый клиент</td>
                                        <td class="not-available"><i class="fa fa-times"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Полная анонимность (в разработке)</td>
                                        <td class="not-available"><i class="fa fa-times"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Новый функционал (в разработке)</td>
                                        <td class="not-available"><i class="fa fa-times"></i></td>
                                        <td class="not-available"><i class="fa fa-times"></i></td>
                                        <td class="available"><i class="fa fa-check"></i></td>
                                    </tr>
                                    <tr class="buttons">
                                        <td></td>
                                        <td class="" data-package="free">
                                          <form class="" action="signup" method="post">
                                              <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
                                              <input  type="hidden" name="plan" value="free">
                                              <button type="submit" class="btn btn-gray small">Выбрать</button>
                                          </form>
                                        </td>

                                        <td data-package="silver">
                                          <form class="" action="signup" method="post">
                                              <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
                                              <input  type="hidden" name="plan" value="silver">
                                              <button type="submit" class="btn btn-success small">Выбрать</button>
                                          </form>

                                        </td>

                                        <td data-package="gold">
                                          <form class="" action="signup" method="post">
                                              <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
                                              <input  type="hidden" name="plan" value="gold">
                                                <button type="submit" class="btn btn-yellow small">Выбрать</button>
                                          </form>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div><!-- /.submit-pricing -->
                        </section><!-- /#select-package -->
                    </section><!-- /#submit -->
                </div><!-- /.col-md-9 -->
                <aside class="col-md-3 col-sm-3">
                    <div class="submit-step">
                        <figure class="step-number">1</figure>
                        <div class="description">
                            <h4>Выберите Ваш тарифный план</h4>
                            <p>Выберите пакет услуг, который наиболее Вам подходит. Если сделать выбор позднее,
                                все опции будут активированы автоматически после оплаты.
                            </p>
                        </div>
                    </div><!-- /.submit-step -->
                </aside><!-- /.col-md-3 -->
            </div><!-- /.row -->
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
<script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="{{ elixir("js/all.js") }}">

<![endif]-->

<script>
    var _latitude = 48.87;
    var _longitude = 2.29;

    google.maps.event.addDomListener(window, 'load', initSubmitMap(_latitude,_longitude));
    function initSubmitMap(_latitude,_longitude){
        var mapCenter = new google.maps.LatLng(_latitude,_longitude);
        var mapOptions = {
            zoom: 15,
            center: mapCenter,
            disableDefaultUI: false,
            //scrollwheel: false,
            styles: mapStyles
        };
        var mapElement = document.getElementById('submit-map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new MarkerWithLabel({
            position: mapCenter,
            map: map,
            icon: 'assets/img/marker.png',
            labelAnchor: new google.maps.Point(50, 0),
            draggable: true
        });
        $('#submit-map').removeClass('fade-map');
        google.maps.event.addListener(marker, "mouseup", function (event) {
            var latitude = this.position.lat();
            var longitude = this.position.lng();
            $('#latitude').val( this.position.lat() );
            $('#longitude').val( this.position.lng() );
        });

//      Autocomplete
        var input = /** @type {HTMLInputElement} */( document.getElementById('address-map') );
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);
            $('#latitude').val( marker.getPosition().lat() );
            $('#longitude').val( marker.getPosition().lng() );
            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }
        });

    }

    function success(position) {
        initSubmitMap(position.coords.latitude, position.coords.longitude);
        $('#latitude').val( position.coords.latitude );
        $('#longitude').val( position.coords.longitude );
    }

    $('.geo-location').on("click", function() {
        if (navigator.geolocation) {
            $('#submit-map').addClass('fade-map');
            navigator.geolocation.getCurrentPosition(success);
        } else {
            error('Geo Location is not supported');
        }
    });

</script>

</body>
</html>
