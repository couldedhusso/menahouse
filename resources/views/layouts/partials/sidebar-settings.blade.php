<aside>
   <ul class="sidebar-navigation">
        <style> ol { list-style-type: none; } </style>
        <li><a href="{{url('mailbox/inbox')}}"><i class="fa fa-envelope-o"></i><span>Сообщения</span></a></li>
        <li><a href="{{url('dashboard/advertisements')}}"><i class="fa fa-newspaper-o" aria-hidden="true"></i><span>Объявления</span></a></li>
        <li><a href="{{url('dashboard/bookmarked')}}"><i class="fa fa-list-ul" aria-hidden="true"></i></i><span>Избранные объявления</span></a></li>
        <li class="active"><a href="{{url('dashboard/settings/'.Auth::user()->id )}}"><i class="fa fa-cogs" aria-hidden="true"></i></i><span>Настройки</span></a></li>
        <li><a href="{{url('subscription-plan/')}}" title="Активировать дополнительные функции сайта"><i class="fa fa-rub"></i>Оплата</a></li>
   </ul>
</aside>
