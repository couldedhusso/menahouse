@extends('templates.TemplatePropertiesListing')

@section('search-results')
  <section id="results">
               <header><h1>Предложения по вашему запросу</h1></header>
               <section id="search-filter">
                   <figure><h3><i class="fa fa-search"></i>Результатов поиска:</h3>
                       <span class="search-count">{{ $foundelemts }}</span>
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
                 @foreach($houses as $house)
                   @if(Auth::check() )
                      @if($house->user_id != Auth::user()->id)
                        <div class="property">
                          {{-- <figure class="tag status">Спецпредложение</figure> --}}
                          @if($house->type_nedvizhimosti == 'Квартира' or $house->type_nedvizhimosti =='Комната')
                            <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/apartment.png')}}" alt=""></figure>
                          @elseif($house->type_nedvizhimosti == 'Частный дом')
                            <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/single-family.png')}}" alt=""></figure>
                          @elseif($house->type_nedvizhimosti == 'Коттедж')
                            <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/cottage.png')}}" alt=""></figure>
                          @else
                            <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/empty.png')}}" alt=""></figure>
                          @endif

                          <div class="property-image">
                              {{-- <figure class="ribbon">{{$categerise}}</figure> --}}
                              <a href="{{ url('advertisement/'.$house->id ) }}">
                                  <img alt="" src="{{asset('storage/thumbnail/'.$house->id.'.jpeg')}}">
                              </a>
                          </div>

                          <div class="info">
                              <header>
                                  <?php
                                  //    use App\Obivlenie ;
                                  //    $newhouse = new Obivlenie();
                                  //    $typehouse = $newhouse->typeHouse($house["_source"]["kolitchestvo_komnat"]) ;
                                    //  $count_ads  += 1 ;
                                  ?>
                                  {{-- <a href="{{ url('property/'.$house["_source"]["id"]) }}"><h3>{{ $typehouse }}</h3></a>  <!-- CZ индивидуальная ссылка объявления --> --}}
                                  <figure>м.{{ $house->metro }}; {{ $house->ulitsa }}</figure>
                              </header>
                              <div class="tag price">{{ $house->price }} рублей</div>
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

                              <a href="{{url('/mailbox/messages/new')}}" class="btn btn-white2" title="Написать владельцу объявления, узнать полную информацию и добавить в избранное">
                              <figure class="fa fa-envelope"></figure>
                              <span>&nbsp; Написать &nbsp;</span>
                              <span class="arrow fa fa-angle-right"></span>
                              </a><!-- /.write-button -->
                              <span class="actions">
                                    <!--<a href="#" class="fa fa-print"></a>-->
                                    <a href="#" class="bookmark" data-bookmark-state="empty"><span class="title">Добавить в избранное</span><span class="title-added">Добавлено</span></a>
                              </span>
                          </div>  {{-- {!! $houses->render() !!} --}}
                        </div> <!-- /.property -->
                      @endif
                   @else
                     <div class="property">
                     {{-- <figure class="tag status">Спецпредложение</figure> --}}
                     @if($house->type_nedvizhimosti == 'Квартира' or $house->type_nedvizhimosti =='Комната')
                       <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/apartment.png')}}" alt=""></figure>
                     @elseif($house->type_nedvizhimosti == 'Частный дом')
                       <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/single-family.png')}}" alt=""></figure>
                     @elseif($house->type_nedvizhimosti == 'Коттедж')
                       <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/cottage.png')}}" alt=""></figure>
                     @else
                       <figure class="type" title="Apartment"><img src="{{ asset('static/assets/img/property-types/empty.png')}}" alt=""></figure>
                     @endif

                     <div class="property-image">
                         {{-- <figure class="ribbon">{{$categerise}}</figure> --}}
                         <a href="{{ url('advertisement/'.$house->id ) }}">
                             <img alt="" src="{{asset('storage/thumbnail/'.$house->id.'.jpeg')}}">
                         </a>
                     </div>

                     <div class="info">
                         <header>
                             <?php
                             //    use App\Obivlenie ;
                             //    $newhouse = new Obivlenie();
                             //    $typehouse = $newhouse->typeHouse($house["_source"]["kolitchestvo_komnat"]) ;
                               $count_ads  = 0 ;
                             ?>
                             {{-- <a href="{{ url('property/'.$house["_source"]["id"]) }}"><h3>{{ $typehouse }}</h3></a>  <!-- CZ индивидуальная ссылка объявления --> --}}
                             <figure>м.{{ $house->metro }}; {{ $house->ulitsa }}</figure>
                         </header>
                         <div class="tag price">{{ $house->price }} рублей</div>
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
                         <a href="{{url('/mailbox/messages/new')}}" class="btn btn-white2" title="Написать владельцу объявления, узнать полную информацию и добавить в избранное">
                         <figure class="fa fa-envelope"></figure>
                         <span>&nbsp; Написать &nbsp;</span>
                         <span class="arrow fa fa-angle-right"></span>
                         </a><!-- /.write-button -->
                         <span class="actions">
                               <!--<a href="#" class="fa fa-print"></a>-->
                               <a href="#" class="bookmark" data-bookmark-state="empty"><span class="title">Добавить в избранное</span><span class="title-added">Добавлено</span></a>
                         </span>
                     </div>  {{-- {!! $houses->render() !!} --}}
                     </div> <!-- /.property -->

                     @if($count_ads >= 4 )
                         <section id="advertising">
                            <a href="{{url('sign-up')}}">
                              <div class="banner">
                                    <div class="wrapper">
                                      <span class="title">Попробуйте, месяц бесплатно!</span>
                                      <span class="submit">Присоединиться! <i class="fa fa-plus-square"></i></span>
                                     </div>
                              </div><!-- /.banner-->
                            </a>
                          </section><!-- /#adveritsing-->
                      @else
                        <?php  $count_ads  += 1; ?>
                     @endif
                   @endif
                 @endforeach


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
@endsection
