@extends('templates.DefaultTemplate')

@section('active_breadcrumb')
  <li class="active">Спасибо!</li>
@endsection

@section('content')
  <section class="center submission-message">
      <header>Спасибо!</header>

      <p> Письмо с ссылкой на подтверждение выслано на адрес: {{ $email }}
         <br> Мы выражаем Вам огромную благодарность
      </p>
      <a href="{{url('/')}}" class="link-arrow">Вернуться на главную страницу</a>
  </section>
@endsection
