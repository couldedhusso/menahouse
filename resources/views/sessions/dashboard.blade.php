
@extends('layouts.admin')

{{-- @section('title', 'Profile') --}}

@section('content')


<div class="container">
      {{-- <div class="flex-grid no-responsive-future" style="height: 100%;"> --}}
          <div class="grid">
          <div class="row">

            <div class="cell colspan12">
              <h3 class="text-light">Объявления <a class="place-right" href="{{ url('/dashboard/nedvizhimosts/add') }}"><button class="button primary" onclick="pushMessage('info')"> Разместить объявление</button></a></h3>
              <hr>
            </div>

          </div>

          <div class="row cells12">
            <div class="cell colspan12">
              {{-- <table class="table border bordered striped" id="main_table_demo">
                    <thead>
                         <tr>
                            {{-- <th style="width: 20px;" colspan="1" rowspan="1">ID</th>
                            <th style="width: 200px;" colspan="1" rowspan="1">Адреса</th>
                            <th style="width: 40px;" colspan="1" rowspan="1">Цена</th>
                            <th style="width: 250px;" colspan="1" rowspan="1">Описание</th>
                            <th style="width: 40px;" colspan="1" rowspan="1"> Действия</th>

                            <th>ID</th>
                            <th>Тип недвижимости</th>
                            <th>Город</th>
                            <th>Цена</th>
                            <th>Описание</th>
                            <th> Действия</th>
                         </tr>
                   </thead>
                   <tbody>

                      @foreach($ads as $ad)
                      <tr>
                          <td>{{ $ad->id }}</td>
                          <td>{{ $ad->type_nedvizhimosti }}</td>
                          <td>{{ $ad->gorod }}</td>
                          <td>{{ $ad->price }}</td>
                          <td>{{ $ad->tekct_obivlenia }}</td>
                          <td>
                              <a class="place-left" href="{{ url('/dashboard/inbox') }}"><i class="mdl-color-text--red-400 material-icons" role="presentation">delete</i></a>
                              <a class="place-center" href="{{ url('/dashboard/inbox') }}"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">mode_edit</i></a>
                              <a class="place-right" href="{{ url('/dashboard/inbox') }}"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">details</i></a>
                          </td>
                      </tr>
                      @endforeach

                   </tbody>
             </table> --}}


<table class="table table-striped table-bordered table-hover">
<thead>
  <tr>
    <th>ID</th>
    <th>Тип недвижимости</th>
    <th>Город</th>
    <th>Цена</th>
    {{-- <th> Действия</th> --}}
    <th></th>
  </tr>
</thead>
<tbody>
  @foreach($ads as $ad)

  <tr class="@item.Status">
    <td>{{ $ad->id }} </td>
    <td>{{ $ad->type_nedvizhimosti }} </td>
    <td>{{ $ad->gorod }} </td>
    <td>{{ $ad->price }} </td>
    {{-- <td>{{ $ad->id }} </td> --}}
    <td>
      <a class="place-left" href="{{ url('/dashboard/inbox') }}">Править &nbsp;| &nbsp;</a>
      <a class="place-left" href="{{ url('/dashboard/inbox') }}">Удалить</a>
    </td>
  </tr>
  @endforeach
</tbody>
</table>


@endsection




{{-- for messaging system
https://laracasts.com/discuss/channels/requests/laravel-4-messaging-system-using-2-tables --}}
