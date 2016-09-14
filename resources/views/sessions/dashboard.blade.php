
@extends('templates.TemplateDashboard')

@section('Title')
  Mena | My Properties
@endsection

@section('active_breadcrumb')
  <li><a href="#">Аккаунт</a></li>
  <li class="active">Мои объявления</li>
@endsection

@section('sidebar')
  @include('layouts.partials.sidebar-properties')
@endsection

@section('content')
  <!-- My Properties -->
<section id="my-properties">
    <header><h1>Список моих объявлений</h1></header>
          <div class="my-properties">
              <div class="table-responsive">
                <table class="table">
                     <thead>
                        <tr>
                                       <th>Объявление</th>
                                       <th></th>
                                       <th>Дата добавления</th>
                                       <th>Просмотры</th>
                                       <th>Действие</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                   @foreach($obivlenie as $house)
                                   <tr>
                                       <?php
                                          $typehouse = $house->HouseCategorie($house->kolitchestvo_komnat) ;
                                          // $typehouse = $house->typeHouse($house->kolitchestvo_komnat, $house->type_nedvizhimosti) ;
                                       ?>
                                       <td class="image">
                                           <a href="{{url('/property/'.$house->id)}}"><img alt="" src="{{asset('storage/thumbnail/'.$house->id.'.jpeg')}}"></a>
                                       </td>
                                       <td><div class="inner">
                                           <a href="{{url('/property/'.$house->id)}}"><h2>{{ $typehouse.', м.'.$house->metro }}</h2></a>
                                           <figure>{{ $house->ulitsa }}</figure>
                                           <div class="tag price">{{ $house->price }}</div>
                                       </div>
                                       </td>
                                       <td>{{ $house->created_at->format('d.m.Y') }}</td>
                                       <td>
                                         @if($house->numberclick  == null)
                                             0
                                            @else
                                              {{ $house->numberclick }}
                                            @endif

                                       </td>
                                       <td class="actions">
                                           <a href="{{url('dashboard/advertisement/edit/'.$house->id)}}" class="edit"><i class="fa fa-pencil" title="Редактировать объявление"></i>Редактировать</a>
                                           <a href="{{url('dashboard/advertisement/delete/'.$house->id)}}"><i class="delete fa fa-trash-o" title="Удалить объявлени"></i></a>
                                       </td>
                                   </tr>
                                    @endforeach
                                   </tbody>
                               </table>
                           </div><!-- /.table-responsive -->
                       </div><!-- /.my-properties -->
                   </section><!-- /#my-properties -->
               <!-- end My Properties -->
@endsection

{{-- for messaging system
https://laracasts.com/discuss/channels/requests/laravel-4-messaging-system-using-2-tables --}}
