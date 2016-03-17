@extends('templates.TemplatePropertiesDetails')
@section('house_details')
  <section id="property-detail">
        <header class="property-title">

            <?php
               $categerise = $property->getCategoriesByName($property->categorie_id);
               $typeproperty = $property->typeHouse($property->kolitchestvo_komnat) ;
            ?>
            <h1>{{$typeproperty}} квартира на {{ $categerise }}</h1> <!-- CZ изменяемый статус на "обмен"/"продажу" -->
            <figure> м.{{ $property->metro }}; ул.{{ $property->ulitsa }}, {{ $property->dom }} </figure> <!-- CZ адрес -->
            <span class="actions">
                <!--<a href="#" class="fa fa-print"></a>-->
                <a href="#" class="bookmark" data-bookmark-state="empty"><span class="title-add">Добавить в избранное</span><span class="title-added">Добавлено</span></a>
            </span>
        </header>
        <section id="property-gallery">
            <div class="owl-carousel property-carousel">
                @foreach($property->images as $img )
                  <div class="property-slide">
                      <a href="https://s3.eu-central-1.amazonaws.com/menahousecs3/dev/images/pics/{{$img->path}}" class="image-popup">
                        <img alt="" src="https://s3.eu-central-1.amazonaws.com/menahousecs3/dev/images/pics/{{$img->path}}">
                      </a>
                  </div><!-- /.property-slide -->
                @endforeach
            </div><!-- /.property-carousel -->
        </section>
        <div class="row">
            <div class="col-md-4 col-sm-12">
                <section id="quick-summary" class="clearfix">
                    <header><h2>Общая информация</h2></header>
                    <dl>
                        <dt>Тип:</dt>
                            <dd>{{$typeproperty}} квартира</dd>
                        <dt>Статус:</dt>
                            <dd>{{ $categerise }}</dd>
    <dt>Город:</dt>
      <dd>Москва</dd>
                        <dt>Адрес:</dt>
                            <dd>ул.{{ $property->ulitsa }}, {{ $property->dom }}</dd>
    <dt>Метро:</dt>
      <dd>{{ $property->metro }}</dd>
                        <dt>Площадь:</dt>
                            <dd>{{ $property->obshaya_ploshad }} м<sup>2</sup></dd>
                        <dt>Жилая:</dt>
                            <dd>{{ $property->zhilaya_ploshad }} м<sup>2</sup></dd>
                        <dt>Кухня:</dt>
                            <dd>9</dd>
                        <dt>Сан.узел:</dt>
                            <dd>{{ $property->san_usel }}</dd>
                        <dt>Цена:</dt>
                            <dd><span class="tag price">{{ $property->price }}</span></dd>
                        <dt>Рейтинг:</dt>
                            <dd><div class="rating rating-overall" data-score="4"></div></dd>
                    </dl>
                </section><!-- /#quick-summary -->
<section id="floor-plans">
                    <div class="floor-plans">
                        <header><h2>План помещения</h2></header>
                        <a href="{{asset('static/assets/img/properties/floor-plan-big.jpg')}}" class="image-popup"><img alt="" src="{{asset('static/assets/img/properties/floor-plan-big.jpg')}}"></a>  <!-- CZ ссылка по id -->
                        <a href="{{asset('static/assets/img/properties/floor-plan-big.jpg')}}" class="image-popup"><img alt="" src="{{asset('static/assets/img/properties/floor-plan-big.jpg')}}"></a>  <!-- CZ ссылка по id -->
                    </div>
                </section><!-- /#floor-plans -->

            </div><!-- /.col-md-4 -->
            <div class="col-md-8 col-sm-12">
                <section id="description">
                    <header><h2>Описание и комментарий</h2></header>
                    <p>
                        {{ $property->tekct_obivlenia }}
                    </p>

                </section><!-- /#description -->
</br>
</div><!-- /.col-md-8 -->

            <div class="col-md-8 col-sm-12">
<div class="col-md-3"></div>
<div class="col-md-9 col-sm-12">
                    <div class="agent-form">
                        <form role="form" id="form-contact-agent" method="post" action="/messages" class="clearfix">
                            <div class="form-group">
                                <input type="hidden" name="_token" value="{!! csrf_token() !!}">
                                <label for="form-contact-agent-message">Отправить личное сообщение<em>*</em></label>
                                <textarea class="form-control" id="form-contact-agent-message" rows="4" name="form-contact-agent-message" required></textarea>
                            </div><!-- /.form-group -->
                            <div class="form-group">
                                <button type="submit" class="btn pull-right btn-white2" id="form-contact-agent-submit">Отправить сообщение</button>
                            </div><!-- /.form-group -->
                            <div id="form-contact-agent-status"></div>
                        </form><!-- /#form-contact -->
                    </div><!-- /.agent-form -->
</div>
            </div><!-- /.col-md-5 -->


<div class="col-md-8">
</br></br></br></br></br>
</div>

<div class="col-md-8 col-sm-12">
    <section id="property-map">
                    <header><h2>Карта</h2></header>
                    <div class="property-detail-map-wrapper">
                        <div class="property-detail-map" id="property-detail-map"></div> <!-- CZ yandex map -->
                    </div>
                </section><!-- /#property-map -->
            </div><!-- /.col-md-8 -->

<div class="col-md-8">
</br></br></br></br></br>
</div>

            <div class="col-md-12 col-sm-12">
                <hr class="thick">
<hr class="thick">
                <section id="similar-properties">
                    <header><h2 class="no-border">Похожие предложения</h2></header>
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="property">
                                <a href="property-detail.html">
                                    <div class="property-image">
                                        <img alt="" src="assets/img/properties/property-06.jpg">
                                    </div>
                                    <div class="overlay">
                                        <div class="info">
                                            <div class="tag price">11 000 000</div>
                                            <h3>2х м.Шоссе Энтузиастов</h3>
                                            <figure>ул.Шоссе Энтузиастов, 141</figure>
                                        </div>
                                        <ul class="additional-info">
                                            <li>
                                                <header>Площадь:</header>
                                                <figure>81м<sup>2</sup></figure>
                                            </li>
                                            <li>
                                                <header>Жилая</header>
                                                <figure>60</figure>
                                            </li>
                                            <li>
                                                <header>Кухня</header>
                                                <figure>8</figure>
                                            </li>
                                            <li>
                                                <header>Этаж</header>
                                                <figure>3/9</figure>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </div><!-- /.property -->
                        </div><!-- /.col-md-3 -->
                        <div class="col-md-4 col-sm-6">
                            <div class="property">
                                <a href="property-detail.html">
                                    <div class="property-image">
                                        <img alt="" src="assets/img/properties/property-04.jpg">
                                    </div>
                                    <div class="overlay">
                                        <div class="info">
                                            <div class="tag price">11 000 000</div>
                                            <h3>2х м.Шоссе Энтузиастов</h3>
                                            <figure>ул.Шоссе Энтузиастов, 130</figure>
                                        </div>
                                        <ul class="additional-info">
                                            <li>
                                                <header>Площадь:</header>
                                                <figure>77м<sup>2</sup></figure>
                                            </li>
                                            <li>
                                                <header>Жилая</header>
                                                <figure>54</figure>
                                            </li>
                                            <li>
                                                <header>Кухня</header>
                                                <figure>8</figure>
                                            </li>
                                            <li>
                                                <header>Этаж</header>
                                                <figure>1/9</figure>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </div><!-- /.property -->
                        </div><!-- /.col-md-3 -->
                        <div class="col-md-4 col-sm-6">
                            <div class="property">
                                <a href="property-detail.html">
                                    <div class="property-image">
                                        <img alt="" src="assets/img/properties/property-07.jpg">
                                    </div>
                                    <div class="overlay">
                                        <div class="info">
                                            <div class="tag price">11 000 000</div>
                                            <h3>2х м.Шоссе Энтузиастов</h3>
                                            <figure>ул.Шоссе Энтузиастов, 147</figure>
                                        </div>
                                        <ul class="additional-info">
                                            <li>
                                                <header>Площадь:</header>
                                                <figure>70м<sup>2</sup></figure>
                                            </li>
                                            <li>
                                                <header>Жилая</header>
                                                <figure>49</figure>
                                            </li>
                                            <li>
                                                <header>Кухня</header>
                                                <figure>9</figure>
                                            </li>
                                            <li>
                                                <header>Этаж</header>
                                                <figure>7/9</figure>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </div><!-- /.property -->
                        </div><!-- /.col-md-3 -->
                    </div><!-- /.row-->
                </section><!-- /#similar-properties -->
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
    </section><!-- /#property-detail -->

@endsection
