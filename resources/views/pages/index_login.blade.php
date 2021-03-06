<!DOCTYPE html>

<html lang="en-US">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="ThemeStarz">

    <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
    <link href="assets/fonts/font-awesome.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.css" type="text/css">
    <link rel="stylesheet" href="assets/css/bootstrap-select.min.css" type="text/css">
    <link rel="stylesheet" href="assets/css/jquery.slider.min.css" type="text/css">
    <link rel="stylesheet" href="assets/css/owl.carousel.css" type="text/css">
    <link rel="stylesheet" href="assets/css/owl.transitions.css" type="text/css">
    <link rel="stylesheet" href="assets/css/style.css" type="text/css">

    <title>Mena | Slider with Floated Horizontal Search Box Homepage</title>

</head>

<body class="page-homepage navigation-fixed-top page-slider horizontal-search-float" id="page-top" data-spy="scroll" data-target=".navigation" data-offset="90">
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
                        <a href="submit.html" title="Разместить объявление своей квартиры бесплатно!" class="promoted"><strong>Разместить объявление</strong></a>
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
                        <a href="#"> <img src="assets/img/logo.png" alt="Менахаус" title="Менахаус"></a>
                    </div>
                </div>
                <nav class="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
                    <ul class="nav navbar-nav">
                        <li class="has-child"><a href="#" title="Основное личное меню пользователя"><i class="fa fa-user fa-fw"></i>&nbsp;Личный кабинет</a>
                            <ul class="child-navigation">
								<li><a href="#" title="Проверить новые сообщения, вам должно повезти" class="list-group-item"><i class="fa fa-envelope-o"></i>&nbsp; Сообщения мне &nbsp;<span class="badge-red" align="right">14</span></a></li> <!-- CZ кол-во сообщений выводится из базы -->
								<li><a href="#" title="Проверить и добавить новое объявление"><i class="fa fa-th-list"></i>&nbsp; Мои объявления</a></li>
                                <li><a href="#" title="Активировать дополнительные функции сайта"><i class="fa fa-rub"></i>&nbsp; Оплата</a></li>
								<li><a href="#" title="Настройки пользователя и сайта"><i class="fa fa-cog"></i>&nbsp; Настройки</a>
                                <li><a href="index.html" title="Обязательно зайдите завтра проверить новые сообщения!"><i class="fa fa-sign-out"></i>&nbsp;Выход</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav><!-- /.navbar collapse-->
                <div class="add-your-property">
                    <a href="submit.html" class="btn btn-green"><i class="fa fa-plus"></i><span class="text">Разместить объявление</span></a>
                </div>
            </header><!-- /.navbar -->
        </div><!-- /.container -->
    </div><!-- /.navigation -->

    <!-- Slider -->
    <div id="slider" class="loading has-parallax">
        <div id="loading-icon"><i class="fa fa-cog fa-spin"></i></div>
        <div class="owl-carousel homepage-slider carousel-full-width">
            <div class="slide">
                <div class="container">
                    <div class="overlay">
                        <div class="info">
                            <div class="tag price">цена всего 11,000,000</div>
                            <h3>H3 Важный заголовок</h3>
							<h4>H4 Крутой текст</h4>
                            <figure>Подзаголовок</figure>
                        </div>
                        <hr>
                        <a href="property-detail.html" class="link-arrow">Продолжить</a>
                    </div>
                </div>
                <img alt="" src="assets/img/slide-01.jpg">
            </div>
            <div class="slide">
                <div class="container">
                    <div class="overlay">
                        <div class="info">
                            <div class="tag price">площадь 186 м^2</div>
                            <h3>H3 Важный заголовок</h3>
                            <figure>Подзаголовок</figure>
                        </div>
                        <hr>
                        <a href="property-detail.html" class="link-arrow">Узнать</a>
                    </div>
                </div>
                <img alt="" src="assets/img/slide-02.jpg">
            </div>
            <div class="slide">
                <div class="container">
                    <div class="overlay">
                        <div class="info">
                            <div class="tag price">только 3 дня!</div>
                            <h3>H3 Важный заголовок</h3>
                            <figure>Подзаголовок</figure>
                        </div>
                        <hr>
                        <a href="property-detail.html" class="link-arrow">Получить!</a>
                    </div>
                </div>
                <img alt="" src="assets/img/slide-03.jpg">
            </div>
        </div>
    </div>
    <!-- end Slider -->

	<!-- Search Box -->
    <div class="search-box-wrapper">
        <div class="search-box-inner">
            <div class="container">
                <div class="search-box map">
					<form role="form" id="form-map-sale" class="form-map form-search clearfix">
					</br>
                        <div class="row">
                            <div class="col-md-2 col-sm-4">
                                <div class="form-group">
                                    <select name="form-sale-city">
                                        <option value="1">Москва</option>
                                    </select>
                                </div><!-- /.form-group -->
                            </div>
                            <div class="col-md-2 col-sm-4">
                                <div class="form-group">
                                    <select name="form-sale-district">
                                        <option value="">Район</option>
                                        <option value="1">ЦАО</option>
                                        <option value="2">ЗАО</option>
                                        <option value="3">ЮАО</option>
                                        <option value="4">ВАО</option>
                                        <option value="5">САО</option>
                                    </select>
                                </div><!-- /.form-group -->
                            </div>
                            <div class="col-md-2 col-sm-4">
                                <div class="form-group">
                                    <select name="form-sale-property-type">
                                        <option value="">Тип жилья</option>
                                        <option value="1">Квартира</option>
                                        <option value="2">Частный дом</option>
                                        <option value="3">Коттедж</option>
                                        <option value="4">Дача</option>
                                    </select>
                                </div><!-- /.form-group -->
                            </div>
							<div class="col-md-2 col-sm-4">
                                <div class="form-group">
                                    <select name="form-sale-room">
                                        <option value="">Кол-во комнат</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5+</option>
                                    </select>
                                </div><!-- /.form-group -->
                            </div>
                            <div class="col-md-2 col-sm-4">
                                <div class="form-group">
                                    <select name="form-sale-area">
                                        <option value="">Площадь</option>
                                        <option value="1">30-70 +</option>
                                        <option value="2">70-90 +</option>
                                        <option value="3">90-110 +</option>
                                        <option value="4">110 +</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-default">Искать</button>
                                </div><!-- /.form-group -->
                            </div> 
							<div class="col-md-12 col-sm-12">
								<hr>
							</div>
							<div class="col-md-4 col-sm-4">
								<article>
									<ul class="list-unstyled list-links">
										<li><a href="properties-listing-lines.html" align="center">Однокомнатные квартиры</a></li>
										<li><a href="properties-listing-lines.html"align="center">Двухкомнатные квартиры</a></li>
									</ul>
								</article>
							</div><!-- /.col-sm-3 -->
							<div class="col-md-4 col-sm-4">
								<article>
									<ul class="list-unstyled list-links">
										<li><a href="properties-listing-lines.html"align="center">Трехкомнатные квартиры</a></li>
										<li><a href="properties-listing-lines.html"align="center">Четырёхкомнатные квартиры</a></li>
									</ul>
								</article>
							</div><!-- /.col-sm-3 -->
							<div class="col-md-4 col-sm-4">
								<article>
									<ul class="list-unstyled list-links">
										<li><a href="properties-listing-lines.html"align="center">Частные дома, коттеджи, таунхаусы</a></li>
										<li><a href="properties-listing-lines.html"align="center">В других городах России</a></li>
									</ul>
								</article>
							</div><!-- /.col-sm-3 -->
						</div>
                    
                    </form><!-- /#form-map -->
                </div><!-- /.search-box -->
            </div><!-- /.container -->
			<br>
        </div><!-- /.search-box-inner -->
        <div class="background-image"><img class="opacity-20" src="assets/img/searchbox-bg.jpg"><br><br></div>


    </div>
    <!-- end Search Box -->

    <!-- Page Content -->
    <div id="page-content">
        <section id="our-services" class="block">
            <div class="container">
                <header class="section-title"><h2>Обмен квартир</h2></header>
                <div class="row">
					<br>
                    <div class="col-md-4 col-sm-4">
                        <div class="feature-box equal-height">
                            <figure class="icon"><i class="fa fa-folder"></i></figure>
                            <aside class="description">
                                <header><h3>Заголовок н3</h3></header>
                                <p>Первая супер причина почему вы с нами! И она звучит так... С нами и только с нами</p><br>
                                <a href="properties-listing.html" class="link-arrow">Подробнее</a>
							</aside>
							<br>
                        </div><!-- /.feature-box -->
                    </div><!-- /.col-md-4 -->
                    <div class="col-md-4 col-sm-4">
                        <div class="feature-box equal-height">
                            <figure class="icon"><i class="fa fa-folder"></i></figure>
                            <aside class="description">
                                <header><h3>Заголовок н3</h3></header>
                                <p>Вторая супер причина почему вы с нами! И она звучит так... А почему не с нами? Только с нами</p><br>
                                <a href="properties-listing.html" class="link-arrow">Подробнее</a>
                            </aside>
							<br>
                        </div><!-- /.feature-box -->
                    </div><!-- /.col-md-4 -->
                    <div class="col-md-4 col-sm-4">
                        <div class="feature-box equal-height">
                            <figure class="icon"><i class="fa fa-folder"></i></figure>
                            <aside class="description">
                                <header><h3>Заголовок н3</h3></header>
                                <p>Третья супер причина почему вы с нами! И она звучит так... Прочее бла-бла-бла </p><br>
                                <a href="properties-listing.html" class="link-arrow">Подробнее</a>
                            </aside>
							<br>
                        </div><!-- /.feature-box -->
                    </div><!-- /.col-md-4 -->
                </div><!-- /.row -->
				<br><br><br>
            </div><!-- /.container -->
        </section><!-- /#our-services -->


        <section id="testimonials" class="block">
            <div class="container">
                <header class="section-title"><h2>Отзывы</h2></header>
                <div class="owl-carousel testimonials-carousel">
                    <blockquote class="testimonial">
                        <figure>
                            <div class="image">
                                <img alt="" src="assets/img/client-01.jpg">
                            </div>
                        </figure>
                        <aside class="cite">
                            <p>Бла-бла-бла Я молодой и энергичный человек. Это мега крутой сайт, он мне помог и всё было очень живенько и круто. Спасибо!</p>
                            <footer>Настоящий человек</footer>
                        </aside>
                    </blockquote>
                    <blockquote class="testimonial">
                        <figure>
                            <div class="image">
                                <img alt="" src="assets/img/client-01.jpg">
                            </div>
                        </figure>
                        <aside class="cite">
                            <p>Я старый и сворливый человек. Мне ничего не нравится и всё раздражает. Обменял свою квартиру в центре на окраину, сэкономил уйму времени и денег.</p>
                            <footer>Настоящий человек старший</footer>
                        </aside>
                    </blockquote>
                </div><!-- /.testimonials-carousel -->
            </div><!-- /.container -->
			<br><br><br><br><br>
        </section><!-- /#testimonials -->
    </div>
    <!-- end Page Content -->
	
        <aside id="advertising" class="block">
            <div class="container">
                <a href="submit.html">
                    <div class="banner">
                        <div class="wrapper">
                            <span class="title">Попробуйте, месяц бесплатно!</span>
                            <span class="submit">Присоединиться! <i class="fa fa-plus-square"></i></span>
                        </div>
                    </div><!-- /.banner-->
                </a>
            </div>
        </aside><!-- /#adveritsing-->

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

<div id="overlay"></div>

<script type="text/javascript" src="assets/js/jquery-2.1.0.min.js"></script>
<script type="text/javascript" src="assets/js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/js/smoothscroll.js"></script>
<script type="text/javascript" src="assets/js/owl.carousel.min.js"></script>
<script type="text/javascript" src="assets/js/bootstrap-select.min.js"></script>
<script type="text/javascript" src="assets/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="assets/js/jquery.placeholder.js"></script>
<script type="text/javascript" src="assets/js/icheck.min.js"></script>
<script type="text/javascript" src="assets/js/jquery.vanillabox-0.1.5.min.js"></script>
<script type="text/javascript" src="assets/js/retina-1.1.0.min.js"></script>
<script type="text/javascript" src="assets/js/jshashtable-2.1_src.js"></script>
<script type="text/javascript" src="assets/js/jquery.numberformatter-1.2.3.js"></script>
<script type="text/javascript" src="assets/js/tmpl.js"></script>
<script type="text/javascript" src="assets/js/jquery.dependClass-0.1.js"></script>
<script type="text/javascript" src="assets/js/draggable-0.1.js"></script>
<script type="text/javascript" src="assets/js/jquery.slider.js"></script>
<script type="text/javascript" src="assets/js/custom.js"></script>
<!--[if gt IE 8]>
<script type="text/javascript" src="assets/js/ie.js"></script>
<![endif]-->
<script>
    $(window).load(function(){
        initializeOwl(false);
    });
</script>
</body>
</html>