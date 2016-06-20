@extends('templates.DefaultTemplate')

@section('Title')
  Mena | Редактировать объявление
@endsection

@section('active_breadcrumb')
  <li class="active">Редактировать объявление</li>
@endsection

@section('content')
<header><h1>Добавить новое объявление</h1></header>
{{-- <form role="form" id="form-submit" class="form-submit" action="thank-you.html"> --}}
{!! Form::open(array('route' => 'path_update_item', 'method' => 'post', 'files' => 'true')) !!}
  <input name="_token" type="hidden" value="{!! csrf_token() !!}" />

  {!! csrf_field() !!}

  <div class="row">
    <div class="col-md-9 col-sm-9">
      <section id="submit-form">
        <section id="basic-information">
          <header>
            <h2>Карточка объекта</h2></header>
          <div class="row">
            <div class="col-md-8">
              <div class="form-group">
                <label for="submit-title">Заголовок</label>
                <input type="text" class="form-control" id="title" name="title" value="{{$house->title}}">
                <input name="id" type="hidden" value="{!! $id !!}" />
              </div>
              <!-- /.form-group -->
            </div>
          </div>
          <div class="form-group">
            <label for="submit-description">Описание</label>
            <textarea class="form-control" id="tekct_obivlenia" rows="8" name="tekct_obivlenia" value="{{$house->tekct_obivlenia}}" ></textarea>
          </div>
          <!-- /.form-group -->
        </section>
        <!-- /#basic-information -->

        <section id="basic-information">
          <div class="row">
            <div class="block clearfix">
              <div class="col-md-6 col-sm-6">
                <section id="summary">
                  <header>
                    <h2>Подробности</h2></header>
                  <div class="form-group">
                    <label for="gorod">Местоположение</label>
                    <select name="gorod" id="gorod">
                      @if($house->gorod == 'Москва')
                        <option value="Москва" selected>Москва</option>
                        <option value="Московская область">Московская область</option>
                        <option value="Новая Москва">Новая Москва</option>
                      @elseif($house->gorod == 'Московская область')
                        <option value="Москва">Москва</option>
                        <option value="Московская область" selected>Московская область</option>
                        <option value="Новая Москва">Новая Москва</option>
                      @else
                        <option value="Москва" selected>Москва</option>
                        <option value="Московская область">Московская область</option>
                        <option value="Новая Москва" selected>Новая Москва</option>
                      @endif
                    </select>
                  </div>

                  <div class="row">

                    <!-- /.col-md-6 -->
                    <div class="col-md-12 col-sm-12">
                      <div class="form-group">
                        <label for="type_nedvizhimosti">Тип жилья</label>
                        <select name="type_nedvizhimosti" id="type_nedvizhimosti">

                          @if($house->type_nedvizhimosti == 'Комната')
                              <option value="Комната" selected>Комната</option>
                              <option value="Квартира">Квартира</option>
                              <option value="Частный дом">Частный дом</option>
                              <option value="Новостройки">Новостройки</option>
                          @elseif($house->type_nedvizhimosti == 'Квартира')
                              <option value="Комната">Комната</option>
                              <option value="Квартира" selected>Квартира</option>
                              <option value="Частный дом">Частный дом</option>
                              <option value="Новостройки">Новостройки</option>
                          @elseif($house->type_nedvizhimosti == 'Частный дом')
                              <option value="Комната">Комната</option>
                              <option value="Квартира">Квартира</option>
                              <option value="Частный дом" selected>Частный дом</option>
                              <option value="Новостройки">Новостройки</option>
                          @else
                            <option value="Комната">Комната</option>
                            <option value="Квартира">Квартира</option>
                            <option value="Частный дом">Частный дом</option>
                            <option value="Новостройки" selected>Новостройки</option>
                          @endif
                        </select>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                          <div class="form-group">
                             <label for="kolitchestvo_komnat">Количество комнат</label>
                                <select name="kolitchestvo_komnat" id="kolitchestvo_komnat" required>
                                   @if($house->kolitchestvo_komnat == '1')
                                       <option value="1" selected>1</option>
                                       <option value="2">2</option>
                                       <option value="3">3</option>
                                       <option value="4">4+</option>
                                   @elseif($house->kolitchestvo_komnat == '2')
                                       <option value="1">1</option>
                                       <option value="2" selected>2</option>
                                       <option value="3">3</option>
                                       <option value="4">4+</option>
                                   @elseif($house->kolitchestvo_komnat == '3')
                                       <option value="1">1</option>
                                       <option value="2">2</option>
                                       <option value="3" selected>3</option>
                                       <option value="4">4+</option>
                                   @else
                                       <option value="1">1</option>
                                       <option value="2">2</option>
                                       <option value="3">3</option>
                                       <option value="4" selected>4+</option>
                                   @endif
                               </select>
                    		</div>
                  </div><!-- /.col-md-6 -->
                  <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                          <label for="roof">Высота потолков</label>
                            <div class="input-group">
                              <input type="text" class="form-control" id="roof" name="roof" value="{{$house->roof}}" >
                              <span class="input-group-addon">м</span>
                            </div>
                      </div><!-- /.form-group -->
                   </div><!-- /.col-md-6 -->
                    <!-- /.col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label for="etazh">Этаж</label>
                        <div class="input-group">
                          <input type="text" class="form-control" id="etazh" name="etazh" value="{{$house->etazh}}" >
                        </div>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label for="etajnost_doma">Этажность дома</label>
                        <div class="input-group">
                          <input type="text" class="form-control" id="etajnost_doma" name="etajnost_doma" value="{{$house->etajnost_doma}}" >
                        </div>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-md-6 -->

                  </div>
                  <!-- /.row -->
                  </br>
                  <p> Площадь: </p>
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label for="obshaya_ploshad">Общая</label>
                        <div class="input-group">
                          <input type="text" class="form-control" id="submit-Beds" name="obshaya_ploshad" value="{{$house->obshaya_ploshad}}">
                          <span class="input-group-addon">м<sup>2</sup></span>
                        </div>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label for="zhilaya_ploshad">Жилая</label>
                        <div class="input-group">
                          <input type="text" class="form-control" id="submit-Baths" name="zhilaya_ploshad" value="{{$house->zhilaya_ploshad}}" >
                          <span class="input-group-addon">м<sup>2</sup></span>
                        </div>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-md-6 -->
                  </div>
                  <!-- /.row -->
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label for="ploshad_kurhni">Кухня</label>
                        <div class="input-group">
                          <input type="text" class="form-control" id="submit-area" name="ploshad_kurhni" value="{{$house->ploshad_kurhni}}" >
                          <span class="input-group-addon">м<sup>2</sup></span>
                        </div>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label for="san_usel">Сан. узел</label>
                        <select name="san_usel" id="san_usel">
                          @if($house->san_usel == 'Совмещенный')
                              <option value="Совмещенный" selected>Совмещенный</option>
                              <option value="Раздельный">Раздельный</option>
                          @else
                            <option value="Совмещенный">Совмещенный</option>
                            <option value="Раздельный" selected>Раздельный</option>
                          @endif
                        </select>
                      </div>
                    </div>
                    <!-- /.col-md-6 -->
                  </div>
                  <!-- /.row -->
                </section>
                <!-- /#summary -->
              </div>
              <!-- /.col-md-6 -->

              <div class="col-md-6 col-sm-6">
                <section id="place-on-map">
                  <header class="section-title">
                    <h2>На карте</h2>
                    <!-- <span class="link-arrow geo-location">Найти автоматически</span> -->
                  </header>
                  <div class="form-group">
                    <label for="address-map">Адрес</label>
                    <input type="text" class="form-control" id="address-map" name="address" value="{{$house->ulitsa}}">
                  </div>
                  <!-- /.form-group -->
                  <label for="address-map">Перенесите метку на карте к вашему дому</label>
                  <div id="submit-map"></div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" class="form-control" title="Координаты широты" id="latitude" name="latitude" readonly>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" class="form-control" title="Координаты долготы" id="longitude" name="longitude" readonly>
                      </div>
                      <!-- /.form-group -->
                    </div>
                  </div>
                </section>
                <!-- /#place-on-map -->
              </div>
              <!-- /.col-md-6 -->
            </div>
            <!-- /.block -->
          </div>
          <!-- /.row -->
        </section>
        <hr>
      </section>
    </div>
    <!-- /.col-md-9 -->
    <div class="col-md-3 col-sm-3">
      </br>
      <aside class="submit-step">
        <figure class="step-number">1</figure>
        <div class="description">
          <h4>Укажите информацию по объекту</h4>
          <p>Укажите точную информацию о вашей квартире или доме в полном соответствии с действительностью. Будьте внимательны. Все объявления проверяются модераторами вручную!
          </p>
        </div>
      </aside>
      <!-- /.submit-step -->
    </div>
    <!-- /.col-md-3 -->
  </div>
  <!-- /.row -->
  <div class="row">
    <div class="block clearfix">
      <div class="col-md-9 col-sm-9">
        <section id="submit-form">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <section id="wish-list">
                <header>
                  <h2>Желаемая цель обмена</h2></header>
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label for="status">Статус</label>
                      <select name="status" id="status">
                        @if($house->status == 'Совмещенный')
                            <option value="Обмен" selected>Обмен</option>
                            <option value="Обмен продажа">Обмен продажа</option>
                        @else
                          <option value="Обмен">Обмен</option>
                          <option value="Обмен продажа" selected>Обмен продажа</option>
                        @endif
                      </select>
                    </div>
                    <!-- /.form-group -->
                  </div>
                  <!-- /.col-md-6 -->
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <label for="tseli_obmena">Цель обмена</label>
                      <select name="tseli_obmena" id="tseli-obmena">
                        @if($house->tseli_obmena == 'На увеличение')
                            <option value="На увеличение" selected>На увеличение</option>
                            <option value="На уменьшение">На уменьшение</option>
                        @else
                          <option value="На увеличение">На увеличение</option>
                          <option value="На уменьшение" selected>На уменьшение</option>
                        @endif
                      </select>
                    </div>
                  </div>
                  <!-- /.col-md-6 -->
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <label for="mestopolozhenie_obmena">Местоположение</label>
                      <select name="mestopolozhenie_obmena" id="mestopolozhenie_obmena">
                        @if($house->tseli_obmena == 'В том же районе')
                          <option value="В том же районе" selected>В том же районе</option>
                          <option value="В другом районе">В другом районе</option>
                        @else
                          <option value="В том же районе">В том же районе</option>
                          <option value="В другом районе" selected>В другом районе</option>
                        @endif

                      </select>
                    </div>
                  </div>
                  <!-- /.col-md-6 -->
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label for="submit-price">Предположительная цена объекта</label><i class="fa fa-question-circle tool-tip" data-toggle="tooltip" data-placement="right" title="Мы можем помочь в определении рыночной цены объекта"></i>
                      <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-rub"></i></span>
                        <input type="text" class="form-control" id="submit-price" name="price" value="{{$house->price}}" >
                      </div>
                    </div>
                    <!-- /.form-group -->
                  </div>
                </div>
                <!-- /.row -->

                <div>
                  <label for="account-agency">
                    Обмен с доплатой <i class="fa fa-question-circle tool-tip" data-toggle="tooltip" data-placement="right" title="Укажите если хотите получить денежную доплату при обмене"></i></label>
                </div>
                <div class="row">
                  <div class="col-md-3 col-sm-3">
                    <div class="checkbox switch" id="agent-switch" data-agent-state="is-agent">
                      <label>
                        <input type="checkbox">
                      </label>
                    </div>
                  </div>
                  <div class="col-md-9 col-sm-9">
                    <section id="agency">
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-rub"></i></span>
                          <input type="text" class="form-control" id="submit-price" name="doplata" value="{{$house->doplata}}">
                        </div>
                      </div>
                      <!-- /.form-group -->
                    </section>
                  </div>
                </div>

              </section>
              <!-- /#wish-list -->
            </div>
            <!-- /.col-md-6 -->
          </div>
          <!-- /.row -->
          <hr>
        </section>
      </div>
      <!-- /.col-md-9 -->
      <div class="col-md-3 col-sm-3">
        </br>
        <aside class="submit-step">
          <figure class="step-number">2</figure>
          <div class="description">
            <h4>Укажите информацию по объекту</h4>
            <p>Укажите точную информацию о вашей квартире или доме в полном соответствии с действительностью. Будьте внимательны. Все объявления проверяются модераторами вручную!
            </p>
          </div>
        </aside>
        <!-- /.submit-step -->
      </div>
      <!-- /.col-md-3 -->
    </div>
  </div>
  <!-- /.row -->
  <div class="row">
    <div class="block clearfix">
      <div class="col-md-9 col-sm-9">
        <section id="submit-form">
          <section class="block" id="gallery">
            <header>
              <h2>Фотографии</h2></header>
            <div class="center">
              <div class="form-group">
                <input id="file-upload" name="file-upload[]" type="file" class="file" multiple="true" enctype="multipart/form-data"
                data-show-upload="false" data-show-caption="false" data-show-remove="false"
                data-browse-class="btn btn-white2" data-browse-label="Загрузить изображения">
                <figure class="note"><strong>Совет:</strong>Загрузите фотографии вашего жилья в формате jpeg или png!</figure>
              </div>
            </div>
          </section>
        </section>
      </div>
      <!-- /.col-md-9 -->
      <div class="col-md-3 col-sm-3">
        </br>
        </br>
        <aside class="submit-step">
          <figure class="step-number">3</figure>
          <div class="description">
            <h4>Загрузите фотографии</h4>
            <p>Загрузите несколько красивых фотографий вашего объекта, чтобы составить хорошее впечатление
            </p>
          </div>
        </aside>
        <!-- /.submit-step -->
      </div>
      <!-- /.col-md-3 -->
    </div>
  </div>
  <!-- /.row -->

  <div class="row">
    <div class="block">
      <div class="col-md-9 col-sm-9">
        <div class="center">
          <div class="form-group">
            <button type="submit" class="btn btn-success large">Отправить данные</button>
          </div>
          <!-- /.form-group -->
          <figure class="note block">Нажимая кнопку “Отправить данные” Вы подтверждаете, что уведомлены и согласны с <a href="{{url('/terms-conditions')}}">Правилами нашего сайта</a></figure>
        </div>
      </div>
      <div class="col-md-3 col-sm-3">
        <aside class="submit-step">
          <figure class="step-number">4</figure>
          <div class="description">
            <h4>Проверьте информацию и нажмите "Отправить"</h4>
            <p>Проверьте введённую Вами информацию и только после этого нажмите продолжить.
            </p>
          </div>
        </aside>
        <!-- /.submit-step -->
      </div>
      <!-- /.col-md-3 -->
    </div>
  </div>
  {!! Form::close() !!}
  <!--</form> /#form-submit -->
  @endsection
