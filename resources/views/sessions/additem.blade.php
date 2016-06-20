@extends('templates.DefaultTemplate')
@section('Title')
  Mena | Add Your Property
@endsection
@section('active_breadcrumb')
  <li class="active">Добавить объявление</li>
@endsection
@section('content')
<header>
  <h1>Добавить новое объявление</h1></header>
{{--
<form role="form" id="form-submit" class="form-submit" action="thank-you.html"> --}}
{!! Form::open(array('route' => 'additem_path', 'method' => 'post', 'files' => 'true')) !!}
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
                <input type="text" class="form-control" id="submit-title" name="title" placeholder="Введите заголовок видимый только Вам" required>
              </div>
              <!-- /.form-group -->
            </div>
          </div>
          <div class="form-group">
            <label for="submit-description">Описание</label>
            <textarea class="form-control" id="submit-description" rows="8" name="submit-description" placeholder="Краткое описание объекта" required></textarea>
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
                    <label for="submit-location">Местоположение</label>
                    <select name="submit-location" id="submit-location">
                      <option value="Москва">Москва</option>
                      <option value="Московская_область">Московская область</option>
                      <option value="Новая_Москва">Новая Москва</option>
                    </select>
                  </div>

                  <div class="row">

                    <!-- /.col-md-6 -->
                    <div class="col-md-12 col-sm-12">
                      <div class="form-group">
                        <label for="submit-property-type">Тип жилья</label>
                        <select name="submit-property-type" id="submit-property-type">
                          <option value="Комната">Комната</option>
                          <option value="Квартира">Квартира</option>
                          <option value="Частный дом">Частный дом</option>
                          <option value="Новостройки">Новостройки</option>
                        </select>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                          <div class="form-group">
                             <label for="submit-room">Количество комнат</label>
                                <select name="submit-room" id="submit-room" required>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                   <option value="4">4+</option>
                               </select>
                    		</div>
                  </div><!-- /.col-md-6 -->
                  <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                          <label for="submit-roof">Высота потолков</label>
                            <div class="input-group">
                              <input type="text" class="form-control" id="submit-roof" name="roof">
                              <span class="input-group-addon">м</span>
                            </div>
                      </div><!-- /.form-group -->
                   </div><!-- /.col-md-6 -->
                    <!-- /.col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label for="submit-etazh">Этаж</label>
                        <div class="input-group">
                          <input type="text" class="form-control" id="submit-Beds" name="submit-etazh" pattern="\d*" required>
                        </div>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label for="submit-etajnost_doma">Этажность дома</label>
                        <div class="input-group">
                          <input type="text" class="form-control" id="submit-Beds" name="submit-etajnost_doma" pattern="\d*" required>
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
                          <input type="text" class="form-control" id="submit-Beds" name="obshaya_ploshad" pattern="\d*" required>
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
                          <input type="text" class="form-control" id="submit-Baths" name="zhilaya_ploshad" pattern="\d*" required>
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
                          <input type="text" class="form-control" id="submit-area" name="ploshad_kurhni" pattern="\d*" required>
                          <span class="input-group-addon">м<sup>2</sup></span>
                        </div>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label for="submit-san-usel">Сан. узел</label>
                        <select name="submit-san-usel" id="submit-san-usel">
                          <option value="Совмещенный">Совмещенный</option>
                          <option value="Раздельный">Раздельный</option>
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
                    <input type="text" class="form-control" id="address-map" name="address" placeholder="Введите адрес в свободной форме" >
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
                      <label for="submit-status">Статус</label>
                      <select name="submit-status" id="submit-status">
                        <option value="Обмен">Обмен</option>
                        <option value="Обмен_продажа">Обмен продажа</option>
                      </select>
                    </div>
                    <!-- /.form-group -->
                  </div>
                  <!-- /.col-md-6 -->
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <label for="submit-status">Цель обмена</label>
                      <select name="submit-tseli-obmena" id="submit-status">
                        <option value="На_увеличение">На увеличение</option>
                        <option value="На_уменьшение">На уменьшение</option>
                      </select>
                    </div>
                  </div>
                  <!-- /.col-md-6 -->
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <label for="submit-status">Местоположение</label>
                      <select name="mestopolozhenie_obmena" id="submit-status">
                        <option value="В_том_же_районе">В том же районе</option>
                        <option value="В_другом_районе">В другом районе</option>
                      </select>
                    </div>
                  </div>
                  <!-- /.col-md-6 -->
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label for="submit-price">Предположительная цена объекта</label><i class="fa fa-question-circle tool-tip" data-toggle="tooltip" data-placement="right" title="Мы можем помочь в определении рыночной цены объекта"></i>
                      <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-rub"></i></span>
                        <input type="text" class="form-control" id="submit-price" name="predpolozhitelnaya_tsena" pattern="\d*">
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
                          <input type="text" class="form-control" id="submit-price" name="doplata" pattern="\d*">
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
