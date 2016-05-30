<aside>
       <ul class="sidebar-navigation">
            <style> ol {   list-style-type: none; } </style>
            <li><a href="{{url('mailbox/inbox')}}"><i class="fa fa-envelope-o"></i><span>Сообщения</span></a></li>
            <li><a><i class="fa fa-newspaper-o" aria-hidden="true"></i><span>Объявления</span></a>
            <ol>
              @if($flag != "bookmarked")
                <li class="active"><a href="{{url('dashboard/advertisements')}}"><i class="fa fa-newspaper-o" aria-hidden="true"></i><span>Мои объявления</span></a>
                <li><a href="{{url('dashboard/bookmarked')}}"><i class="fa fa-heart-o"></i><span>Избранное</span></a></li>
              @else
                <li><a href="{{url('dashboard/advertisements')}}"><i class="fa fa-newspaper-o" aria-hidden="true"></i><span>Мои объявления</span></a>
                <li class="active"><a href="{{url('dashboard/bookmarked')}}"><i class="fa fa-heart-o"></i><span>Избранное</span></a></li>
              @endif
            </ol>
        </li>
        <li><a href="{{url('dashboard/settings/'.Auth::user()->id)}}"><i class="fa fa-cogs" aria-hidden="true"></i></i><span>Настройки</span></a></li>
      </ul>
</aside>
