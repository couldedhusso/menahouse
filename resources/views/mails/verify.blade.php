@extends('templates.AccountActivationTemplate')

@section('Message')
  <h1>Здравствуйте, {{ $imia.' '.$otchestvo }} !</h1>
  <p class="lead">Поздравляем с регистрацией на www.menahouse.ru.</p>
@endsection

@section('link_activation')
  <p>
    Чтобы активировать ваш аккаунт, пожалуйста, используйте следующую ссылку:
    {{ URL::to('register/verify/' .$confirm_cod ) }}.<br/>
 </p>

 <h5>Внимание! </h5>
 <span> Активация аккаунта производится только по данной ссылке.Отвечать на данное сообщение не нужно.</span>

 <p>
   <small>Вы получили это сообщение потому, что ваш e-mail адрес был зарегистрирован на сайте www.menahouse.ru. Если Вы не регистрировались на этом сайте,
     пожалуйста, проигнорируйте это письмо.</small>
 </p> <br/>

 <p>
   <strong>С наилучшими пожеланиями, <br> администрация сайта www.menahouse.ru .</strong>
 </p>
@endsection

{{-- @section('content')

<hr>Здравствуйте !</h4>
<h3>Поздравляем с регистрацией на www.menahouse.ru </h3>

<div>
    Чтобы активировать ваш аккаунт, пожалуйста, используйте ссылку:
    {{ URL::to('register/verify/' .$confirm_cod ) }}.<br/>

    <h5>Внимание! </h5>
    <span> Активация аккаунта производится только по данной ссылке.Отвечать на данное сообщение не нужно.</span>

    <p>
      <small>Вы получили это сообщение потому, что ваш e-mail адрес был зарегистрирован на сайте www.menahouse.ru. Если Вы не регистрировались на этом сайте,
        пожалуйста, проигнорируйте это письмо.</small>
    </p> <br/>

    <p>
      <strong>С наилучшими пожеланиями, администрация сайта www.menahouse.ru .</strong>
    </p>

</div>

@endsection --}}
