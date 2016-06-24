<aside>
    <ul class="sidebar-navigation">
    <style> ol { list-style-type: none; } </style>
        <li class=""><a><i class="fa fa-envelope-o"></i><span>Сообщения</span></a>
            <ol>

                @if($flag == "sent")
                    <li><a href="{{url('mailbox/inbox')}}"><i class="fa fa-inbox"></i><span>Входящие</span></a></li>
                    <li class="active"><a href="{{url('/mailbox/message/sent')}}"><i class="fa fa-paper-plane-o" aria-hidden="true"></i><span>Исходящие</span></a></li>
                    <li><a href="{{url('/mailbox/message/liked')}}"><i class="fa fa-heart-o"></i><span>Избранное</span></a></li>
                    <li><a href="{{url('/mailbox/message/trash')}}"><i class="fa fa-trash-o"></i><span>Удалёные </a></li>
                @elseif($flag == "liked")
                    <li><a href="{{url('mailbox/inbox')}}"><i class="fa fa-inbox"></i><span>Входящие</span></a></li>
                    <li><a href="{{url('/mailbox/message/sent')}}"><i class="fa fa-paper-plane-o" aria-hidden="true"></i><span>Исходящие</span></a></li>
                    <li class="active"><a href="{{url('/mailbox/message/liked')}}"><i class="fa fa-heart-o"></i><span>Избранное</span></a></li>
                    <li><a href="{{url('/mailbox/message/trash')}}"><i class="fa fa-trash-o"></i><span>Удалёные </a></li>
                @elseif($flag == "deleted")
                    <li><a href="{{url('mailbox/inbox')}}"><i class="fa fa-inbox"></i><span>Входящие</span></a></li>
                    <li><a href="{{url('/mailbox/message/sent')}}"><i class="fa fa-paper-plane-o" aria-hidden="true"></i><span>Исходящие</span></a></li>
                    <li><a href="{{url('/mailbox/message/liked')}}"><i class="fa fa-heart-o"></i><span>Избранное</span></a></li>
                    <li class="active"><a href="{{url('/mailbox/message/trash')}}"><i class="fa fa-trash-o"></i><span>Удалёные </a></li>
                @else
                    <li class="active"><a href="{{url('mailbox/inbox')}}"><i class="fa fa-inbox"></i><span>Входящие</span></a></li>
                    <li><a href="{{url('/mailbox/message/sent')}}"><i class="fa fa-paper-plane-o" aria-hidden="true"></i><span>Исходящие</span></a></li>
                    <li><a href="{{url('/mailbox/message/liked')}}"><i class="fa fa-heart-o"></i><span>Избранное</span></a></li>
                    <li><a href="{{url('/mailbox/message/trash')}}"><i class="fa fa-trash-o"></i><span>Удалёные </a></li>
                @endif

            </ol>
          </li>
          <li><a href="{{url('dashboard/advertisements')}}"><i class="fa fa-newspaper-o" aria-hidden="true"></i><span>Мои объявления</span></a></li>
          <li><a href="{{url('dashboard/bookmarked')}}"><i class="fa fa-list-ul" aria-hidden="true"></i></i><span>Избранные объявления</span></a></li>
          <li><a href="{{url('dashboard/settings/'.Auth::user()->id )}}"><i class="fa fa-cogs" aria-hidden="true"></i></i><span>Настройки</span></a></li>
          <li><a href="#" title="Активировать дополнительные функции сайта"><i class="fa fa-rub"></i>Оплата</a></li>
    </ul>
</aside>
