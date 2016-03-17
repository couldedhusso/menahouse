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
    <link rel="stylesheet" href="{{ asset('static/assets/css/style.css')}}" type="text/css">

    <title>Mena | Properties Listing</title>

</head>

<body class="page-sub-page page-listing-lines page-search-results" id="page-top">
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

    <!-- Page Content -->
    <div id="page-content">
        <!-- Breadcrumb -->
        <div class="container">
            <ol class="breadcrumb">
                <li><a href="index.html">Главная</a></li>
                <li class="active">Результаты поиска</li>
            </ol>
        </div>
        <!-- end Breadcrumb -->

        <div class="container">
            <div class="row">
                <!-- Results -->
                <div class="col-md-9 col-sm-9">
                    <section id="results">
                        <header><h1>Предложения по вашему запросу</h1></header>
                        <section id="search-filter">
                            <figure><h3><i class="fa fa-search"></i>Результатов поиска:</h3>
                                <span class="search-count">28</span>
                                <div class="sorting">
                                    <div class="form-group">
                                        <select name="sorting">
                                            <option value="">Сортировать</option>
                                            <option value="1">По цене убывания</option>
                                            <option value="2">По метражу</option>
                                            <option value="3">По дате добавления</option>
                                        </select>
                                    </div><!-- /.form-group -->
                                </div>
                            </figure>
                        </section>
                        <section id="properties" class="display-lines">
                            <div class="property">
                                <figure class="tag status">Спецпредложение</figure>
                                <figure class="type" title="Apartment"><img src="assets/img/property-types/apartment.png" alt=""></figure>
                                <div class="property-image">
                                    <figure class="ribbon">Обмен</figure>
                                    <a href="property-detail.html">
                                        <img alt="" src="assets/img/properties/property-01.jpg">
                                    </a>
                                </div>
                                <div class="info">
                                    <header>
                                        <a href="property-detail.html"><h3>2х комнатная</h3></a>  <!-- CZ индивидуальная ссылка объявления -->
                                        <figure>м.Шоссе Энтузиастов; ул.Шоссе Энтузиастов, 147</figure>
                                    </header>
                                    <div class="tag price">8 380 000 рублей</div>
                                    <aside>
                                        <p>Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой.
										Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет.
                                        </p>
                                        <dl>
                                            <dt>Этаж:</dt>
                                                <dd>2/9</dd>
                                            <dt>Площадь:</dt>
                                                <dd>70 м<sup>2</sup></dd>
                                            <dt>Жилая:</dt>
                                                <dd>49 м<sup>2</sup></dd>
                                            <dt>Кухня:</dt>
                                                <dd>9 м<sup>2</sup></dd>
                                        </dl>
                                    </aside>
									<a href="#" class="btn btn-white" title="Написать владельцу объявления, узнать полную информацию и добавить в избранное">
									<figure class="fa fa-envelope"></figure>
									<span>&nbsp; Написать &nbsp;</span>
									<span class="arrow fa fa-angle-right"></span>
									</a><!-- /.write-button -->
                                </div>
                            </div><!-- /.property -->

							<div class="property">
                                <figure class="type" title="Single Family"><img src="assets/img/property-types/single-family.png" alt=""></figure>
                                <div class="property-image">
                                    <figure class="ribbon">Обмен</figure>
                                    <a href="property-detail.html">
                                        <img alt="" src="assets/img/properties/property-01.jpg">
                                    </a>
                                </div>
                                <div class="info">
                                    <header>
                                        <a href="property-detail.html"><h3>2х комнатная</h3></a>  <!-- CZ индивидуальная ссылка объявления -->
                                        <figure>м.Шоссе Энтузиастов; ул.Шоссе Энтузиастов, 147</figure>
                                    </header>
                                    <div class="tag price">8 380 000 рублей</div>
                                    <aside>
                                        <p>Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой.
										Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет.
                                        </p>
                                        <dl>
                                            <dt>Этаж:</dt>
                                                <dd>2/9</dd>
                                            <dt>Площадь:</dt>
                                                <dd>70 м<sup>2</sup></dd>
                                            <dt>Жилая:</dt>
                                                <dd>49 м<sup>2</sup></dd>
                                            <dt>Кухня:</dt>
                                                <dd>9 м<sup>2</sup></dd>
                                        </dl>
                                    </aside>
									<a href="#" class="btn btn-white" title="Написать владельцу объявления, узнать полную информацию и добавить в избранное">
									<figure class="fa fa-envelope"></figure>
									<span>&nbsp; Написать &nbsp;</span>
									<span class="arrow fa fa-angle-right"></span>
									</a><!-- /.write-button -->
                                </div>
                            </div><!-- /.property -->

                            <div class="property">
                                <figure class="type" title="Apartment"><img src="assets/img/property-types/apartment.png" alt=""></figure>
                                <div class="property-image">
                                    <figure class="ribbon-2">Продажа</figure>
                                    <a href="property-detail.html">
                                        <img alt="" src="assets/img/properties/property-01.jpg">
                                    </a>
                                </div>
                                <div class="info">
                                    <header>
                                        <a href="property-detail.html"><h3>2х комнатная</h3></a>  <!-- CZ индивидуальная ссылка объявления -->
                                        <figure>м.Шоссе Энтузиастов; ул.Шоссе Энтузиастов, 147</figure>
                                    </header>
                                    <div class="tag price">8 380 000 рублей</div>
                                    <aside>
                                        <p>Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой.
										Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет.
                                        </p>
                                        <dl>
                                            <dt>Этаж:</dt>
                                                <dd>2/9</dd>
                                            <dt>Площадь:</dt>
                                                <dd>70 м<sup>2</sup></dd>
                                            <dt>Жилая:</dt>
                                                <dd>49 м<sup>2</sup></dd>
                                            <dt>Кухня:</dt>
                                                <dd>9 м<sup>2</sup></dd>
                                        </dl>
                                    </aside>
									<a href="#" class="btn btn-white" title="Написать владельцу объявления, узнать полную информацию и добавить в избранное">
									<figure class="fa fa-envelope"></figure>
									<span>&nbsp; Написать &nbsp;</span>
									<span class="arrow fa fa-angle-right"></span>
									</a><!-- /.write-button -->
                                </div>
                            </div><!-- /.property -->

                            <section id="advertising">
								<a href="registration.html">
                                    <div class="banner">
                                        <div class="wrapper">
											<span class="title">Попробуйте, месяц бесплатно!</span>
											<span class="submit">Присоединиться! <i class="fa fa-plus-square"></i></span>
                                        </div>
                                    </div><!-- /.banner-->
                                </a>
                            </section><!-- /#adveritsing-->

							<div class="property">
                                <figure class="type" title="Single Family"><img src="assets/img/property-types/single-family.png" alt=""></figure>
                                <div class="property-image">
                                    <figure class="ribbon">Обмен</figure>
                                    <a href="property-detail.html">
                                        <img alt="" src="assets/img/properties/property-01.jpg">
                                    </a>
                                </div>
                                <div class="info">
                                    <header>
                                        <a href="property-detail.html"><h3>2х комнатная</h3></a>  <!-- CZ индивидуальная ссылка объявления -->
                                        <figure>м.Шоссе Энтузиастов; ул.Шоссе Энтузиастов, 147</figure>
                                    </header>
                                    <div class="tag price">8 380 000 рублей</div>
                                    <aside>
                                        <p>Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой.
										Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет.
                                        </p>
                                        <dl>
                                            <dt>Этаж:</dt>
                                                <dd>2/9</dd>
                                            <dt>Площадь:</dt>
                                                <dd>70 м<sup>2</sup></dd>
                                            <dt>Жилая:</dt>
                                                <dd>49 м<sup>2</sup></dd>
                                            <dt>Кухня:</dt>
                                                <dd>9 м<sup>2</sup></dd>
                                        </dl>
                                    </aside>
									<a href="#" class="btn btn-white" title="Написать владельцу объявления, узнать полную информацию и добавить в избранное">
									<figure class="fa fa-envelope"></figure>
									<span>&nbsp; Написать &nbsp;</span>
									<span class="arrow fa fa-angle-right"></span>
									</a><!-- /.write-button -->
                                </div>
                            </div><!-- /.property -->

							<div class="property">
                                <figure class="type" title="Single Family"><img src="assets/img/property-types/single-family.png" alt=""></figure>
                                <div class="property-image">
                                    <figure class="ribbon">Обмен</figure>
                                    <a href="property-detail.html">
                                        <img alt="" src="assets/img/properties/property-01.jpg">
                                    </a>
                                </div>
                                <div class="info">
                                    <header>
                                        <a href="property-detail.html"><h3>2х комнатная</h3></a>  <!-- CZ индивидуальная ссылка объявления -->
                                        <figure>м.Шоссе Энтузиастов; ул.Шоссе Энтузиастов, 147</figure>
                                    </header>
                                    <div class="tag price">8 380 000 рублей</div>
                                    <aside>
                                        <p>Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой.
										Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет.
                                        </p>
                                        <dl>
                                            <dt>Этаж:</dt>
                                                <dd>2/9</dd>
                                            <dt>Площадь:</dt>
                                                <dd>70 м<sup>2</sup></dd>
                                            <dt>Жилая:</dt>
                                                <dd>49 м<sup>2</sup></dd>
                                            <dt>Кухня:</dt>
                                                <dd>9 м<sup>2</sup></dd>
                                        </dl>
                                    </aside>
									<a href="#" class="btn btn-white" title="Написать владельцу объявления, узнать полную информацию и добавить в избранное">
									<figure class="fa fa-envelope"></figure>
									<span>&nbsp; Написать &nbsp;</span>
									<span class="arrow fa fa-angle-right"></span>
									</a><!-- /.write-button -->
                                </div>
                            </div><!-- /.property -->

                            <div class="property">
                                <figure class="type" title="Apartment"><img src="assets/img/property-types/apartment.png" alt=""></figure>
                                <div class="property-image">
                                    <figure class="ribbon">Продажа</figure>
                                    <a href="property-detail.html">
                                        <img alt="" src="assets/img/properties/property-01.jpg">
                                    </a>
                                </div>
                                <div class="info">
                                    <header>
                                        <a href="property-detail.html"><h3>2х комнатная</h3></a>  <!-- CZ индивидуальная ссылка объявления -->
                                        <figure>м.Шоссе Энтузиастов; ул.Шоссе Энтузиастов, 147</figure>
                                    </header>
                                    <div class="tag price">8 380 000 рублей</div>
                                    <aside>
                                        <p>Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой.
										Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет.
                                        </p>
                                        <dl>
                                            <dt>Этаж:</dt>
                                                <dd>2/9</dd>
                                            <dt>Площадь:</dt>
                                                <dd>70 м<sup>2</sup></dd>
                                            <dt>Жилая:</dt>
                                                <dd>49 м<sup>2</sup></dd>
                                            <dt>Кухня:</dt>
                                                <dd>9 м<sup>2</sup></dd>
                                        </dl>
                                    </aside>
									<a href="#" class="btn btn-white" title="Написать владельцу объявления, узнать полную информацию и добавить в избранное">
									<figure class="fa fa-envelope"></figure>
									<span>&nbsp; Написать &nbsp;</span>
									<span class="arrow fa fa-angle-right"></span>
									</a><!-- /.write-button -->
                                </div>
                            </div><!-- /.property -->
							<div class="property">
                                <figure class="type" title="Single Family"><img src="assets/img/property-types/single-family.png" alt=""></figure>
                                <div class="property-image">
                                    <figure class="ribbon">Обмен</figure>
                                    <a href="property-detail.html">
                                        <img alt="" src="assets/img/properties/property-01.jpg">
                                    </a>
                                </div>
                                <div class="info">
                                    <header>
                                        <a href="property-detail.html"><h3>2х комнатная</h3></a>  <!-- CZ индивидуальная ссылка объявления -->
                                        <figure>м.Шоссе Энтузиастов; ул.Шоссе Энтузиастов, 147</figure>
                                    </header>
                                    <div class="tag price">8 380 000 рублей</div>
                                    <aside>
                                        <p>Обменяю 2-ку на 3-ку в ЖК Гусарская Баллада по улице Кутузова с моей доплатой.
										Лоджия 6кв + курилка. Выполнен отличный ремонт, 1 собственник, более 3-х лет.
                                        </p>
                                        <dl>
                                            <dt>Этаж:</dt>
                                                <dd>2/9</dd>
                                            <dt>Площадь:</dt>
                                                <dd>70 м<sup>2</sup></dd>
                                            <dt>Жилая:</dt>
                                                <dd>49 м<sup>2</sup></dd>
                                            <dt>Кухня:</dt>
                                                <dd>9 м<sup>2</sup></dd>
                                        </dl>
                                    </aside>
									<a href="#" class="btn btn-white" title="Написать владельцу объявления, узнать полную информацию и добавить в избранное">
									<figure class="fa fa-envelope"></figure>
									<span>&nbsp; Написать &nbsp;</span>
									<span class="arrow fa fa-angle-right"></span>
									</a><!-- /.write-button -->
                                </div>
                            </div><!-- /.property -->


                            <!-- Pagination -->
                            <div class="center">
                                <ul class="pagination">
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                </ul><!-- /.pagination-->
                            </div><!-- /.center-->
                        </section><!-- /#properties-->
                    </section><!-- /#results -->
                </div><!-- /.col-md-9 -->
                <!-- end Results -->

                <!-- sidebar -->
                <div class="col-md-3 col-sm-3">
                    <section id="sidebar">
                        <aside id="edit-search">
                            <header><h3>Поиск</h3></header>
                            <form role="form" id="form-sidebar" class="form-search" action="properties-listing.html">
                                <div class="form-group">
                                    <select name="city">
                                        <option value="1">Москва</option>
                                    </select>
                                </div><!-- /.form-group -->
                                <div class="form-group">
                                    <select name="district">
                                        <option value="">Район</option>
                                        <option value="1">ЦАО</option>
                                        <option value="2">ЗАО</option>
                                        <option value="3">ЮАО</option>
                                        <option value="4">ВАО</option>
                                        <option value="5">САО</option>
                                    </select>
                                </div><!-- /.form-group -->
                                <div class="form-group">
                                    <select name="property-type">
                                        <option value="">Тип жилья</option>
                                        <option value="1">Квартира</option>
                                        <option value="2">Частный дом</option>
                                        <option value="3">Коттедж</option>
                                        <option value="4">Дача</option>
                                    </select>
                                </div><!-- /.form-group -->
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
								<div class="form-group">
                                    <select name="form-sale-area">
                                        <option value="">Площадь</option>
                                        <option value="1">30-70 +</option>
                                        <option value="2">70-90 +</option>
                                        <option value="3">90-110 +</option>
                                        <option value="4">110 +</option>
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
                                        <img alt="" src="assets/img/properties/property-06.jpg">
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

<script type="text/javascript" src="assets/js/jquery-2.1.0.min.js"></script>
<script type="text/javascript" src="assets/js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/js/smoothscroll.js"></script>
<script type="text/javascript" src="assets/js/bootstrap-select.min.js"></script>
<script type="text/javascript" src="assets/js/retina-1.1.0.min.js"></script>
<script type="text/javascript" src="assets/js/jshashtable-2.1_src.js"></script>
<script type="text/javascript" src="assets/js/jquery.numberformatter-1.2.3.js"></script>
<script type="text/javascript" src="assets/js/tmpl.js"></script>
<script type="text/javascript" src="assets/js/jquery.dependClass-0.1.js"></script>
<script type="text/javascript" src="assets/js/draggable-0.1.js"></script>
<script type="text/javascript" src="{{ asset('static/assets/js/jquery.slider.js') }}"></script>
<script type="text/javascript" src="{{asset('static/assets/js/custom.js')}}"></script>
<!--[if gt IE 8]>
<script type="text/javascript" src="{{asset('static/assets/js/ie.js')}}"></script>
<![endif]-->

</body>
</html>
