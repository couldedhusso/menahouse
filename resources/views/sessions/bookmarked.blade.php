@extends('templates.TemplateDashboard')

@section('Title')
  Mena | Bookmarked Properties
@endsection

@section('active_breadcrumb')
  <li><a href="#">Аккаунт</a></li>
  <li class="active">Избранное</li>
@endsection

@section('sidebar')
  @include('layouts.partials.sidebar-bookmarked')
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
                                    <tr ng-repeat="house in mesfavoris.slice(((currentPage-1)*itemsPerPage), ((currentPage)*itemsPerPage))">
                                        <td class="image">
                                             <a ng-href="/property/{>house.id<}"> <img alt="" ng-src="{>getimgpath(house.id)<}"></a>
                                        </td>
                                        <td><div class="inner">
                                            <a ng-href="/property/{>house.id<}"><h2>{> gettypehouse(house.kolitchestvo_komnat, house.type_nedvizhimosti)<}, м.{> house.metro<}</h2></a>
                                            <figure>{> house.ulitsa <}</figure>
                                            <div class="tag price">{> house.price <}</div>
                                        </div>
                                        </td>
                                        <td>{> house.bkm_date.slice(0, -9)<}</td>
                                        <td class="actions">
                                          <a ng-href="/property/{>house.id<}" class="edit"><i class="fa fa-link" title="Перейти к объявлению"></i>Перейти</a>
                                          <a ng-href="/dashboard/bookmarked/delete/{>house.bkm_id<}"><i class="delete fa fa-trash-o" title="Удалить объявление"></i></a>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div><!-- /.table-responsive -->
                            <!-- Pagination -->
                            <div class="center">
                                <pagination total-items="mesfavoris.length" ng-model="currentPage"  class="pagination" items-per-page="itemsPerPage"></pagination>
                            </div><!-- /.center-->
            </div><!-- /.my-properties -->
        </section><!-- /#my-properties -->
                <!-- end My Properties -->

@endsection
