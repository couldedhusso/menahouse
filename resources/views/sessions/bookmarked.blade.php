@extends('templates.TemplateDashboard')
use App\Obivlenie;
@section('Title')
  Mena | Bookmarked Properties
@endsection

@section('active_breadcrumb')
  <li><a href="#">Аккаунт</a></li>
  <li class="active">Избранное</li>
@endsection

@section('sidebar')
  @include('layouts.partials.sidebar-properties')
@endsection

@section('content')
  <section id="my-properties">
                     <header><h1>Избранные объявления списком</h1></header>
                     <div class="my-properties">
                         <div class="table-responsive">
                             <table class="table">
                                 <thead>
                                 <tr>
                                     <th>Объявление</th>
                                     <th></th>
                                     <th>Дата добавления</th>
                                     <th>Действие</th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                   @foreach($houses as $house)
                                   <tr>
                                       <?php
                                          switch ($house->kolitchestvo_komnat) {
                                            case '1':

                                              $tpRoom = "однокомнатная ";
                                              break;
                                            case '2':

                                              $tpRoom = "2х комнатная ";
                                              break;
                                            case '3':

                                              $tpRoom = "3х комнатная ";
                                              break;
                                           case '4':

                                                $tpRoom = "4х комнатная ";
                                                break;

                                            default:

                                              $tpRoom = "Студия";
                                              break;
                                          }
                                       ?>
                                       <td class="image">
                                           <a href="{{url('dashboard/advertisement/'.$house->id)}}"><img alt="" src="{{asset('storage/thumbnail/'.$house->id.'.jpeg')}}"></a>
                                       </td>
                                       <td><div class="inner">
                                           <a href="{{url("property/".$house->id)}}"><h2>{{ $tpRoom.', м.'.$house->metro }}</h2></a>
                                           <figure>{{ $house->ulitsa }}</figure>
                                           <div class="tag price">{{ $house->price }}</div>
                                       </div>
                                       </td>
                                       <td><?php
                                            $date = date_create($house->bkm_date);
                                            echo date_format($date,"d.m.Y");
                                       ?></td>

                                       <td class="actions">
                                          <a href="{{url("property/".$house->id)}}" class="edit"><i class="fa fa-link" title="Перейти к объявлению"></i>Перейти</a>
                                          <a href="{{url("dashboard/bookmarked/delete/".$house->bkm_id)}}"><i class="delete fa fa-trash-o" title="Удалить объявление"></i></a>
                                       </td>
                                   </tr>
                                    @endforeach
                                 </tbody>
                             </table>
                         </div><!-- /.table-responsive -->
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
                     </div><!-- /.my-properties -->
                 </section><!-- /#my-properties -->
@endsection
