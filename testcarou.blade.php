                @if(Auth::check())


                  @else

                     <div id="myCarousel" class="carousel slide" data-ride="carousel">

                              <?php $itemid = 0; ?>

                               @foreach(array_chunk($houses, 2) as $items)
                                    <?php $itemid = $itemid + 1; ?>

                                    <!-- Carousel items -->
                                     <div class="carousel-inner" role="listbox">
                                       
                                        @foreach($items as $house )

                                          @if($itemid == 1)
                                               <div class="active item">
                                                 <?php
                                                      $home = new App\Obivlenie ;
                                                      $typehousenumberrooms =  $home->typeHouse($house->kolitchestvo_komnat, $house->type_nedvizhimosti) ;
                                                 ?>

                                                  <div class="property">

                                                  <!--  <div class="property"> -->
                                                   {{-- <figure class="tag status">Спецпредложение</figure> --}}
                                                   {{-- @if($house->type_nedvizhimosti == 'Квартира' or $house->type_nedvizhimosti =='Комната')
                                                     <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/apartment.png')}}" alt=""></figure>
                                                   @elseif($house->type_nedvizhimosti == 'Частный дом')
                                                     <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/single-family.png')}}" alt=""></figure>
                                                   @elseif($house->type_nedvizhimosti == 'Коттедж')
                                                     <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/cottage.png')}}" alt=""></figure>
                                                   @else
                                                     <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/empty.png')}}" alt=""></figure>
                                                   @endif --}}
                                                   <span class="actions pull-right">
                                                        <?php // TODO: tester l envoie de la requete ?>
                                                        <a id="bookmarkItem" href="#" class="bookmark" data-bookmark-state="empty"><span class="title-add">В избранное</span><span class="title-added">Добавлено</span></a>
                                                    </span>

                                                   <div class="property-image">
                                                       {{-- <figure class="ribbon">{{$categerise}}</figure> --}}
                                                       <figure class="ribbon">
                                                         @if($house->status != "Обмен")
                                                           Обмен-продаж
                                                         @else
                                                           {{$house->status}}
                                                         @endif
                                                     </figure>
                                                       <a href="{{ url('property/'.$house->id ) }}">
                                                           <img alt="" src="{{asset('storage/thumbnail/'.$house->id.'.jpeg')}}">
                                                       </a>
                                                   </div>

                                                   <div class="info">
                                                       <header>
                                                           <a href="{{ url('property/'.$house->id ) }}"><h3>{{$typehousenumberrooms }}</h3></a>
                                                           <figure>м.{{ $house->metro }}; {{ $house->ulitsa }}</figure>
                                                       </header>
                                                       <div class="tag price"><?php echo number_format($house->price, 2, ',', ' ')." "; ?>&#x20bd</div>
                                                       <aside>
                                                           <p>
                                                             {{ $house->tekct_obivlenia }}
                                                           </p>
                                                           <dl>
                                                               <dt>Этаж:</dt>
                                                                   <dd>{{ $house->etazh }} / {{ $house->etajnost_doma }}</dd>
                                                               <dt>Площадь:</dt>
                                                                   <dd>{{ $house->obshaya_ploshad }} м<sup>2</sup></dd>
                                                               <dt>Жилая:</dt>
                                                                   <dd>{{ $house->zhilaya_ploshad }} м<sup>2</sup></dd>
                                                               <dt>Кухня:</dt>
                                                                   <dd>{{ $house->ploshad_kurhni }} м<sup>2</sup></dd>
                                                           </dl>
                                                       </aside>

                                                       <a href="{{url('/mailbox/message/compose/'.$house->id)}}" class="btn btn-white-grey-3 btn-m-3" title="Открыть объявление, узнать полную информацию и написать владельцу">
                                                         <figure class="fa fa-envelope"></figure>
                                                         <span>&nbsp; Написать &nbsp;</span>
                                                         <span class="arrow fa fa-angle-right"></span>
                                                       </a><!-- /.write-button -->
                                                   </div>  {{-- {!! $houses->render() !!} --}}

                                                   </div>
                                                   <!-- </div>  /.property -->

                                               </div>
                                           @else
                                               <div class="item">
                                                   <?php
                                                        $home = new App\Obivlenie ;
                                                        $typehousenumberrooms =  $home->typeHouse($house->kolitchestvo_komnat, $house->type_nedvizhimosti) ;
                                                   ?>

                                                    <div class="property">

                                                          <!--  <div class="property"> -->
                                                           {{-- <figure class="tag status">Спецпредложение</figure> --}}
                                                           {{-- @if($house->type_nedvizhimosti == 'Квартира' or $house->type_nedvizhimosti =='Комната')
                                                             <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/apartment.png')}}" alt=""></figure>
                                                           @elseif($house->type_nedvizhimosti == 'Частный дом')
                                                             <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/single-family.png')}}" alt=""></figure>
                                                           @elseif($house->type_nedvizhimosti == 'Коттедж')
                                                             <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/cottage.png')}}" alt=""></figure>
                                                           @else
                                                             <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/empty.png')}}" alt=""></figure>
                                                           @endif --}}
                                                           <span class="actions pull-right">
                                                                <?php // TODO: tester l envoie de la requete ?>
                                                                <a id="bookmarkItem" href="#" class="bookmark" data-bookmark-state="empty"><span class="title-add">В избранное</span><span class="title-added">Добавлено</span></a>
                                                            </span>

                                                           <div class="property-image">
                                                               {{-- <figure class="ribbon">{{$categerise}}</figure> --}}
                                                               <figure class="ribbon">
                                                                 @if($house->status != "Обмен")
                                                                   Обмен-продаж
                                                                 @else
                                                                   {{$house->status}}
                                                                 @endif
                                                             </figure>
                                                               <a href="{{ url('property/'.$house->id ) }}">
                                                                   <img alt="" src="{{asset('storage/thumbnail/'.$house->id.'.jpeg')}}">
                                                               </a>
                                                           </div>

                                                           <div class="info">
                                                               <header>
                                                                   <a href="{{ url('property/'.$house->id ) }}"><h3>{{$typehousenumberrooms }}</h3></a>
                                                                   <figure>м.{{ $house->metro }}; {{ $house->ulitsa }}</figure>
                                                               </header>
                                                               <div class="tag price"><?php echo number_format($house->price, 2, ',', ' ')." "; ?>&#x20bd</div>
                                                               <aside>
                                                                   <p>
                                                                     {{ $house->tekct_obivlenia }}
                                                                   </p>
                                                                   <dl>
                                                                       <dt>Этаж:</dt>
                                                                           <dd>{{ $house->etazh }} / {{ $house->etajnost_doma }}</dd>
                                                                       <dt>Площадь:</dt>
                                                                           <dd>{{ $house->obshaya_ploshad }} м<sup>2</sup></dd>
                                                                       <dt>Жилая:</dt>
                                                                           <dd>{{ $house->zhilaya_ploshad }} м<sup>2</sup></dd>
                                                                       <dt>Кухня:</dt>
                                                                           <dd>{{ $house->ploshad_kurhni }} м<sup>2</sup></dd>
                                                                   </dl>
                                                               </aside>

                                                               <a href="{{url('/mailbox/message/compose/'.$house->id)}}" class="btn btn-white-grey-3 btn-m-3" title="Открыть объявление, узнать полную информацию и написать владельцу">
                                                                 <figure class="fa fa-envelope"></figure>
                                                                 <span>&nbsp; Написать &nbsp;</span>
                                                                 <span class="arrow fa fa-angle-right"></span>
                                                               </a><!-- /.write-button -->
                                                           </div>  {{-- {!! $houses->render() !!} --}}

                                                   </div>
                                                   <!-- </div>  /.property -->

                                               </div>
                                           @endif
                                        @endforeach
                                   </div>
                                @endforeach

                      </div><!-- carousel-->

                  @endif
