@extends('templates.TemplateMailbox')

@section('Title')
  Mena | Mailbox
@endsection

@section('active_breadcrumb')
  <li><a href="#">Сообщения</a></li>
  <li class="active">Входящие</li>
@endsection

@section('sidebar')
  @include('layouts.partials.sidebar-mailbox')
@endsection

@section('content')

<div class="col-md-3 col-sm-3">
               <div class="full-height-scroll">
                   <ul class="list-group elements-list">
                       <li class="list-group-item">
                           <a data-toggle="tab" href="#tab-1">
                               <small class="pull-right text-muted"> 11.05.2016</small>
                               <strong>Сергей Бегальцев</strong>
                               <div class="small">
                                   <p>
                                       Добрый день. Хотел узнать подробнее по вашей квартире
                                   </p>
                                   <p>
                                       <i class="fa fa-map-marker"></i> м.Фили
                                   </p>
                               </div>
                           </a>
                       </li>
                       <li class="list-group-item active">
                           <a data-toggle="tab" href="#tab-2">
                               <small class="pull-right text-muted"> 11.05.2016</small>
                               <strong>Гурен</strong>
                               <div class="small">
                                   <p>
                                       Здарова. Скинь фоток. Хачу видеть
                                       <br/>
                                   </p>
                                   <p>
                                       <i class="fa fa-map-marker"></i> м.Достоевская
                                   </p>
                               </div>
                           </a>
                       </li>
                       <li class="list-group-item">
                           <a data-toggle="tab" href="#tab-3">
                               <small class="pull-right text-muted"> 08.05.2016</small>
                               <strong>Michael Jackson</strong>
                               <div class="small">
                                   <p>
                                       Looks pretty like. How about meeting?
                                   </p>
                                   <p>
                                       <i class="fa fa-map-marker"></i> м.Проспект мира
                                   </p>
                               </div>
                           </a>
                       </li>
                       <li class="list-group-item">
                           <a data-toggle="tab" href="#tab-4">
                               <small class="pull-right text-muted"> 02.04.2016</small>
                               <strong>Алексей</strong>
                               <div class="small">
                                   <p>
                                       Здравствуйте. Очень понравилась ваша квартира.
                                   </p>
                                   <p>
                                       <i class="fa fa-map-marker"></i> м.Фили
                                   </p>
                               </div>
                           </a>
                       </li>
                   </ul>
               </div>
           </div>

           <div class="col-md-6 col-sm-6">
               <div class="full-height-scroll white-bg border-left">
                   <div class="element-detail-box">
                       <div class="tab-content">
                           <div id="tab-1" class="tab-pane active">

                               <div class="pull-right">
                                     <button class="btn btn-white-red" title="Добавить в избранное"><i class="fa fa-heart-o"></i> </button>
                                     <button class="btn btn-white-grey" title="В корзину"><i class="fa fa-trash-o"></i> </button>
                                     <button class="btn btn-white-grey" title="Пожаловаться на агента"><i class="fa fa-bug" aria-hidden="true"></i>&nbsp;Пожаловаться</button>
                               </div>
                               <div class="small text-muted">
                                   <i class="fa fa-clock-o"></i> Среда, 11 Мая 2016, 12:32
                               </div>

                               <h2>
                                   Добрый день. Хотел узнать подробнее по вашей квартире
                               </h2>

                               <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                               </p>
                               <p>
                                   Sed fringilla nibh est, sit amet consectetur justo imperdiet vel. Aliquam rhoncus, sem pulvinar facilisis elementum, nisl magna auctor massa, sodales commodo nibh nibh quis quam. Vivamus sit amet lacinia augue. Phasellus pulvinar, magna vitae posuere aliquet, ipsum neque lobortis quam, pharetra feugiat ex lectus nec lectus. Mauris ut felis eros. Quisque porta rutrum orci nec maximus. Aenean rhoncus sollicitudin semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                               </p>
                               <p class="small">
                                   <strong>Спасибо, Сергей Бегальцев </strong>
                               </p>

                                   <div class="attachment">
                                           <div class="file">
                                               <a href="#">
                                                   <div class="icon">
                                                       <i class="fa fa-file-image-o"></i>
                                                   </div>
                                                   <div class="file-name">
                                                       Photo_2015.jpg
                                                   </div>
                                               </a>
                                           </div>
                                           <div class="file">
                                               <a href="#">
                                                   <div class="icon">
                                                     <i class="fa fa-file-image-o"></i>
                                                   </div>
                                                   <div class="file-name">
                                                       Photo_2016.jpg
                                                   </div>
                                               </a>
                                           </div>
                                       <div class="clearfix"></div>
                                   </div>

                           </div>

                           <div id="tab-2" class="tab-pane">
                             <div class="pull-right">
                                   <button class="btn btn-white-red" title="Добавить в избранное"><i class="fa fa-heart-o"></i> </button>
                                   <button class="btn btn-white-grey" title="В корзину"><i class="fa fa-trash-o"></i> </button>
                                   <button class="btn btn-white-grey" title="Пожаловаться на агента"><i class="fa fa-bug" aria-hidden="true"></i>&nbsp;Пожаловаться</button>
                             </div>
                             <div class="small text-muted">
                                 <i class="fa fa-clock-o"></i> Среда, 11 Мая 2016, 10:05
                             </div>

                             <h2>
                                 Здарова. Скинь фоток. Хачу видеть
                             </h2>

                             <p>
                                 Хачу видеть всю квартиру. Куда сам лягу. Где маленький будет спать. Панимаешь?
                                 Давай кидай
                             </p>
                             <p>
                                 <strong>Гурен </strong>
                             </p>

                           </div>

                           <div id="tab-3" class="tab-pane">
                             <div class="pull-right">
                                   <button class="btn btn-white-red" title="Добавить в избранное"><i class="fa fa-heart-o"></i> </button>
                                   <button class="btn btn-white-grey" title="В корзину"><i class="fa fa-trash-o"></i> </button>
                                   <button class="btn btn-white-grey" title="Пожаловаться на агента"><i class="fa fa-bug" aria-hidden="true"></i>&nbsp;Пожаловаться</button>
                             </div>
                             <div class="small text-muted">
                                 <i class="fa fa-clock-o"></i> Воскресенье, 08 Мая 2016, 12:32
                             </div>

                             <h2>
                                 Looks pretty good. How about meeting?
                             </h2>

                             <p>
                                 Sed fringilla nibh est, sit amet consectetur justo imperdiet vel. Aliquam rhoncus, sem pulvinar facilisis elementum, nisl magna auctor massa, sodales commodo nibh nibh quis quam. Vivamus sit amet lacinia augue. Phasellus pulvinar, magna vitae posuere aliquet, ipsum neque lobortis quam, pharetra feugiat ex lectus nec lectus. Mauris ut felis eros. Quisque porta rutrum orci nec maximus. Aenean rhoncus sollicitudin semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             </p>
                             <p class="small">
                                 <strong>Michael Jackson </strong>
                             </p>

                           </div>

                           <div id="tab-4" class="tab-pane">
                             <div class="pull-right">
                                   <button class="btn btn-white-red" title="Добавить в избранное"><i class="fa fa-heart-o"></i> </button>
                                   <button class="btn btn-white-grey" title="В корзину"><i class="fa fa-trash-o"></i> </button>
                                   <button class="btn btn-white-grey" title="Пожаловаться на агента"><i class="fa fa-bug" aria-hidden="true"></i>&nbsp;Пожаловаться</button>
                             </div>
                             <div class="small text-muted">
                                 <i class="fa fa-clock-o"></i> Среда, 11 Мая 2016, 10:05
                             </div>

                             <h2>
                                 Здравствуйте. Далеко от метро?
                             </h2>

                             <p>
                                 Скину пару фоток своей, чтобы было интересно моё предложение.
                             </p>
                             <p>
                                 <strong>Марк </strong>
                             </p>
                             <div class="m-t-lg">
                                 <p>
                                     <span><i class="fa fa-paperclip"></i> 5 файлов - </span>
                                     <a href="#"> Загрузить всё </a>
                                 </p>

                                 <div class="attachment">
                                         <div class="file">
                                             <a href="#">
                                                 <div class="icon">
                                                     <i class="fa fa-file-image-o"></i>
                                                 </div>
                                                 <div class="file-name">
                                                     Photo_1.jpg
                                                 </div>
                                             </a>
                                         </div>
                                         <div class="file">
                                             <a href="#">
                                                 <div class="icon">
                                                   <i class="fa fa-file-image-o"></i>
                                                 </div>
                                                 <div class="file-name">
                                                     Photo_2.jpg
                                                   </div>
                                               </a>
                                           </div>
                                           <div class="file">
                                               <a href="#">
                                                   <div class="icon">
                                                     <i class="fa fa-file-image-o"></i>
                                                   </div>
                                                   <div class="file-name">
                                                       Photo_3.jpg
                                                     </div>
                                                 </a>
                                             </div>
                                             <div class="file">
                                                 <a href="#">
                                                     <div class="icon">
                                                       <i class="fa fa-file-image-o"></i>
                                                     </div>
                                                     <div class="file-name">
                                                         Photo_4.jpg
                                                       </div>
                                                   </a>
                                               </div>
                                               <div class="file">
                                                   <a href="#">
                                                       <div class="icon">
                                                         <i class="fa fa-file-image-o"></i>
                                                       </div>
                                                       <div class="file-name">
                                                           Photo_5.jpg
                                                         </div>
                                                     </a>
                                               </div>

                                       <div class="clearfix"></div>
                                   </div>
                               </div>

                           </div>

      
                       </div>

                   </div>

               </div>
           </div>


@endsection
