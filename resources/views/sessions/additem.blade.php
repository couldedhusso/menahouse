@extends('layouts.admin')

@section('Title')
    <p> Панел управления </p>
@endsection

@section('content')

<div class="container">
  <div class="grid">
    <div class="row">
        <div class="cell colspan12">
            <h3 class="text-light">Размещение объявления</h3>
            <hr>
        </div>
    </div>


    {{--  'action' => 'NedvizhimostsController@additem',  {!! Form::open(array('route' => 'add_path', 'class'=>'dropzone', 'files'=>true, 'id'=>'real-dropzone')) !!} --}}

    {!! Form::open(array('route' => 'additem_path', 'method' => 'post', 'files' => 'true')) !!}



    {{-- <form  action="additem" method="post" class="dropzone" id="dropzone" enctype="multipart/form-data"> --}}
            <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
            {!! csrf_field() !!}
            <div class="row cells12">
              <div class="cell colspan2">
                <h5>Тип сделки</h5>
                <div class="full-size input-control select">
                  <select name="categorie">
                       <option>- Не выбрано -</option>
                       <option value="Продажа">Продажа</option>
                       <option value="Аренда">Аренда</option>
                       <option value="Обмен">Обмен</option>
                  </select>
                </div>

              </div>

                <div class="cell colspan4">
                  <h5>Тип недвижимости</h5>
                  <div class="full-size input-control select">
                    <select name="type_nedvizhimosti">
                         <option >- Не выбрано -</option>
                         <option value="Квартира">Квартира</option>
                         <option value="Комната">Комната</option>
                         <option value="Частный дом">Частный дом</option>
                         <option value="Коттедж">Коттедж</option>
                         <option value="Дом/Дача">Дача</option>
                         {{-- <option value="Офис">Офис</option>
                         <option value="Здание">Здание</option>
                         <option value="Торговое помещение">Торговое помещение</option>
                         <option value="Склад">Склад</option> --}}
                    </select>
                  </div>
                </div>

                <div class="cell colspan3">
                  <h5>Город</h5>
                  <div class="full-size input-control select">
                    <select name="gorod">
                         <option >- Не выбрано -</option>
                         <option value="Москва">Москва</option>
                         {{-- <option value="Московская область">Московская область</option>
                         <option value="Санкт-Петербург">Санкт-Петербург</option> --}}
                    </select>
                  </div>
                </div>

                <div class="cell colspan3">
                  <h5>Районы</h5>
                  {{-- <div class="input-control full-size text">
                    <input type="text" name="rayon" placeholder="Например : ЦАО">
                  </div> --}}
                  <div class="full-size input-control select">
                    <select name="rayon">
                         <option>- Не выбрано -</option>
                         <option value="ЦАО">ЦАО</option>
                         <option value="ЗАО">ЗАО</option>
                         <option value="ЮАО">ЮАО</option>
                         <option value="ВАО">ВАО</option>
                         <option value="САО">САО</option>
                    </select>
                </div>
          </div>

          <div class="row cells12">


         <div class="cell colspan4">
            <h5>Улица</h5>
              <div class="input-control full-size text">
                <input type="text" name="ulitsa">
              </div>
         </div>

          <div class="cell colspan2">
              <h5>Дом</h5>
              <div class="input-control full-size text">
                    <input type="text" name="dom">
              </div>
          </div>

           <div class="cell colspan2">
               <h5>Строение</h5>
              <div class="input-control full-size text">
                    <input type="text" name="stroenie">
              </div>
           </div>

            <div class="cell colspan4 place-right">
              <h5>Метро</h5>
              <div class="input-control full-size text">

                  <input type="text" name="metro" required placeholder="Например : Беляево">
              </div>
            </div>

          </div>


          <div class="row cells12">

            <div class="cell colspan2">
                <h5>Цена</h5>
               <div class="input-control full-size text">
                     <input type="text" name="price">
               </div>
            </div>

              <div class="cell colspan4">
                  <h5>Количество комнат</h5>
                  <div class="full-size input-control select">
                      <select name="kolitchestvo_komnat">
                           <option >- Не выбрано -</option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="студия">студия</option>
                      </select>
                </div>
              </div>

              <div class="cell colspan3">
                  <h5>Этажей в доме</h5>
                 <div class="input-control full-size text">
                       <input type="text" name="etajnost_doma">
                 </div>
              </div>

              <div class="cell">
                  <h5>Этаж</h5>
                 <div class="input-control full-size text">
                       <input type="text" name="etazh">
                 </div>
              </div>

              <div class="cell colspan2">
                  <h5>Общая площадь</h5>
                 <div class="input-control full-size text">
                       <input type="text" name="obshaya_ploshad">
                 </div>
              </div>


          </div>
          <div class="row cells12">

            <div class="cell colspan2">
                <h5>Жилая площадь</h5>
               <div class="input-control full-size text">
                     <input type="text" name="zhilaya_ploshad">
               </div>
            </div>


            <div class="cell colspan2">
                <h5>Площадь кухнии</h5>
               <div class="input-control full-size text">
                     <input type="text" name="ploshad_kurhni">
               </div>
            </div>

            <div class="cell colspan2">
                <h5>Санузел</h5>
               <div class="input-control full-size text">
                     <input type="text" name=san_usel>
               </div>
            </div>

            <div class="cell colspan6">
                <h5>Текст объявления</h5>
                <div class="input-control full-size textarea">
                    <textarea name="opicanie"></textarea>
                </div>
            </div>
          </div>
      <h5>Фотографии</h5>
          <div class="row cells12 ">

            <div class="cell colspan12">


            <div class="input-control full-size file" data-role="input">

                {!! Form::file('pics[]', array('multiple'=>true)) !!}
                <button class="button"><span class="mif-folder"></span></button>
            </div>



                {{-- <div class="dz-message needsclick">
                  Drop files here or click to upload.<br>
                </div>
                  <div class="dropzone-previews dz-image-preview dz-success dz-complete " id="dropzonePreview">
                  </div>

                  <div class="fallback">
                      <input name="pics" type="file" multiple />
                      {{ Form::file('pics') }}
                 </div> --}}
            </div>
          </div>

          <div class="row cells6">
            <div class="cell colpsan6">
                <input type="submit" id="submit-all" value="Разместить объявление" class="button primary">
            </div>

          </div>

    {{-- </form> --}}
        {!! Form::close() !!}




          <!-- Dropzone Preview Template -->
           {{-- <div id="preview-template" style="display: none;">

               <div class="dz-preview dz-file-preview">
                   <div class="dz-image"><img data-dz-thumbnail=""></div>

                   {{-- <div class="dz-details">
                       <div class="dz-size"><span data-dz-size=""></span></div>
                       <div class="dz-filename"><span data-dz-name=""></span></div>
                   </div> --
                   <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress=""></span></div>
                   <div class="dz-error-message"><span data-dz-errormessage=""></span></div>

                   <div class="dz-success-mark">
                       <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                           <!-- Generator: Sketch 3.2.1 (9971) - http://www.bohemiancoding.com/sketch -->
                           <title>Check</title>
                           <desc>Created with Sketch.</desc>
                           <defs></defs>
                           <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                               <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>
                           </g>
                       </svg>
                   </div>

                   <div class="dz-error-mark">
                       <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                           <!-- Generator: Sketch 3.2.1 (9971) - http://www.bohemiancoding.com/sketch -->
                           <title>error</title>
                           <desc>Created with Sketch.</desc>
                           <defs></defs>
                           <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                               <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">
                                   <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>
                               </g>
                           </g>
                       </svg>
                   </div>

               </div>
           </div> --}}
           <!-- End Dropzone Preview Template -->

  </div>

</div>


@endsection
