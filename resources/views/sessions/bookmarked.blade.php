@extends('templates.TemplateDashboard')
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
                                          $typephouse = $house->HouseCategorie($house->kolitchestvo_komnat) ;
                                       ?>
                                       <td class="image">
                                           <a href="{{url('dashboard/advertisement/'.$house->id)}}"><img alt="" src="{{asset('storage/thumbnail/'.$house->id.'.jpeg')}}"></a>
                                       </td>
                                       <td><div class="inner">
                                           <a href="property-detail.html"><h2>{{ $typephouse.', м.'.$house->metro }}</h2></a>
                                           <figure>{{ $house->ulitsa }}</figure>
                                           <div class="tag price">{{ $house->price }}</div>
                                       </div>
                                       </td>
                                       <td>{{ $house->created_at->format('d.m.Y') }}</td>
                                       <td>236</td>
                                       <td class="actions">
                                           <a href="#" class="edit"><i class="fa fa-pencil" title="Редактировать объявление"></i>Редактировать</a>
                                           <a href="#"><i class="delete fa fa-trash-o" title="Удалить объявлени"></i></a>
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
