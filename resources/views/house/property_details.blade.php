@extends('templates.TemplatesItemDetails')

@section('Title')
  Mena |  Property Detail
@endsection

@section('active_breadcrumb')
  <li class="active">Подробное описание</li>
  <li> <a href="#poisk" class="link-arrow" title="Перейти к поиску">Перейти к поиску</a>
@endsection

@section('content')
  <section id="property-detail">
  <header class="property-title">

      <?php
         $typehouse = $house->typeHouse($house->kolitchestvo_komnat, $house->type_nedvizhimosti) ;
         $retVal = ($house->status == "Обмен") ? "Обмен" : "Обмен+продажу" ;
      ?>
      <h1>{{$typehouse}} на {{ $retVal }}</h1>
      <!-- CZ изменяемый статус на "обмен"/"продажу" -->
      <figure> м.{{ $house->metro }}; {{ $house->ulitsa }} </figure>
      <!-- CZ адрес -->

      <span class="actions">
        <!--<a href="#" class="fa fa-print"></a>-->

        <a href="{{url("/dashboard/bookmarked/".$id)}}" class="bookmark" data-bookmark-state="empty"><span class="title-add">Добавить в избранное</span><span class="title-added">Добавлено</span></a>
        <a href="#form-contact-agent" class="btn btn-white-grey-2" style=""title="Написать"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>

      </span>
  </header>
  <section id="property-gallery">
    <div class="owl-carousel property-carousel">
      @foreach($house->images as $img )
      <div class="property-slide">
          <a href="{{asset('storage/pictures/'.$img->path)}}" class="image-popup">
            <img alt="{{$house->title}}" src="{{asset('storage/pictures/'.$img->path)}}">
          </a>
      </div>
      <!-- /.property-slide -->
      @endforeach
    </div>
    <!-- /.property-carousel -->
  </section>
  <div class="row">
    <div class="col-md-4 col-sm-12">
      <section id="quick-summary" class="clearfix">
        <header>
          <h2>Общая информация</h2></header>
        <dl>
          <dt>Тип:</dt>
          <dd>{{$typehouse}}</dd>
          <dt>Статус:</dt>
          @if($house->status == "Обмен")
            <dd>{{ $house->status }}</dd>
          @else
              <dd>Обмен продажа</dd>
          @endif

          <dt>Город:</dt>
          @if($house->gorod == "Москва")
            <dd>{{ $house->gorod}}</dd>
          @elseif($house->gorod == "Московская область")
            <dd> Московская область</dd>
          @else
            <dd> Новая Москва</dd>
          @endif
          <dt>Округ:</dt>
          <dd>{{ $house->rayon }}</dd>
          <dt>Адрес:</dt>
          <dd>{{ $house->ulitsa }}, {{ $house->dom }}</dd>
          <dt>Ближайшее метро:</dt>
          <dd>{{ $house->metro }}</dd>
          <dt>Площадь:</dt>
          <dd>{{ $house->obshaya_ploshad }} м<sup>2</sup></dd>
          <dt>Жилая:</dt>
          <dd>{{ $house->zhilaya_ploshad }} м<sup>2</sup></dd>
          <dt>Кухня:</dt>
          <dd>{{ $house->ploshad_kurhni }} м<sup>2</sup></dd></dd>
          <dt>Сан.узел:</dt>
          <dd>{{ $house->san_usel }}</dd>
          <dt>Высота потолков</dt>
                <dd>{{ $house->roof }} м</dd>
          <dt>Этаж</dt>
               <dd>{{ $house->etazh }}/{{ $house->etajnost_doma }}</dd>
          <dt>Цена:</dt>
          <dd><span class="tag price"> <?php echo number_format($house->price, 2, ',', ' ')." "; ?>&#x20bd</span></dd>
          {{-- <dt>Рейтинг:</dt>
          <dd>
            <div class="rating rating-overall" data-score="4"></div>
          </dd> --}}
        </dl>
      </section>
      <!-- /#quick-summary -->
      {{-- <section id="floor-plans">
        <div class="floor-plans">
          <header>
            <h2>План помещения</h2></header>
          <a href="assets/img/properties/floor-plan-big.jpg" class="image-popup"><img alt="" src="assets/img/properties/floor-plan-01.jpg"></a>
          <!-- CZ ссылка по id -->
          <a href="assets/img/properties/floor-plan-big.jpg" class="image-popup"><img alt="" src="assets/img/properties/floor-plan-02.jpg"></a>
          <!-- CZ ссылка по id -->
        </div>
      </section> --}}
      <!-- /#floor-plans -->

    </div>
    <!-- /.col-md-4 -->
    <div class="col-md-8 col-sm-12">
      <section id="description">
        <header>
          <h2>Описание и комментарий</h2></header>
        <p> {{ $house->tekct_obivlenia }} </p>
      </section>
      <!-- /#description -->
      </br>
    </div>
    <!-- /.col-md-8 -->

    <div class="col-md-8 col-sm-12">
      <div class="col-md-3"></div>
      <div class="col-md-12 col-sm-12">
        <div class="agent-form">

          {{-- @if(Auth::check())

          @endif --}}
          <form role="form" id="form-contact-agent" method="post" class="clearfix" action="/mailbox/message/compose">
            <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
            {!! csrf_field() !!}


            <input type="hidden" name="subject" value="{{$typehouse}} квартира на {{ $house->status }}">
            <input type="hidden" name="To" value="{{ $house->user_id }}">
            <input type="hidden" name="id_obivlenie" value="{{ $house->id }}">

            <div class="form-group">
              <label for="form-contact-agent-message">Вам понравилось? Есть вопросы? Напишите письмо<em>*</em></label>
              <textarea class="form-control" id="form-contact-agent-message" rows="5" name="form-message" placeholder="Добрый день! Мне понравился ваш объект..." required></textarea>
            </div>
            <!-- /.form-group -->
            <div class="form-group">
              <button type="submit" class="btn pull-right btn-white2" id="form-contact-agent-submit">Отправить сообщение</button>
            </div>
            <!-- /.form-group -->
            <div id="form-contact-agent-status"></div>
          </form>
          <!-- /#form-contact -->
        </div>
        <!-- /.agent-form -->
      </div>
    </div>
    <!-- /.col-md-5 -->
    <div class="col-md-8">
      </br>
      </br>
    </div>

    <div class="col-md-8">
    		 </br>
    </div>
    <div class="col-md-12 col-sm-12">
    			<section id="property-map">
          <header><h2>Карта</h2></header>
              <div class="property-detail-map-wrapper">
                <iframe src="https://api-maps.yandex.ru/frame/v1/-/CVdNENPK" width="100%" height="320px" frameborder="0"></iframe>
             </div>
          </section><!-- /#property-map -->
    </div><!-- /.col-md-8 -->
    <!-- /.col-md-8 -->
  </div>
  <!-- /.row -->
</section>
<!-- /#property-detail -->
@endsection
