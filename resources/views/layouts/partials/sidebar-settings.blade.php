<aside>
   <ul class="sidebar-navigation">
        <style> ol { list-style-type: none; } </style>
        <li><a href="{{url('mailbox/inbox')}}"><i class="fa fa-envelope-o"></i><span>Сообщения</span></a></li>
        <li><a href="{{url('dashboard/advertisements')}}"><i class="fa fa-newspaper-o" aria-hidden="true"></i><span>Объявления</span></a></li>
        <li><a><i class="fa fa-cogs"></i><span>Настройки</span></a>
              <ol>
                  <li class="active"><a href="{{url('dashboard/settings/'.Auth::user()->id)}}"><i class="fa fa-cog"></i><span>Мои настройки</span></a></li>
                  <li><a href="#"><i class="fa fa-volume-up" aria-hidden="true"></i><span>Уведомления</span></a></li>
                  <li><a href="#" title="Активировать дополнительные функции сайта"><i class="fa fa-rub"></i>&nbsp; Оплата</a></li>
              </ol>
        </li>
   </ul>
</aside>
