@extends('layouts.admin')

@section('content')
<div class="container">
  <div class="grid">
      <div class="row cells12">
          <div class="cell colspan12">
            <h3 class="text-light">Личная информация </h3>
              <hr>
          </div>
      </div>
   </div>

   <div class="grid">
         <div class="row cells12">
           <div class="cell colspan4 cls-border">
               <div id="img-preview">
                  {{-- <img src="{{ asset('storage/profil').'/'.$userprofile->images->path }}"> --}}
                  @include('sessions.avatar-user')
               </div>
           </div>

           <div class="cell colspan8">
                <div class="grid">
                      <div class="row cells12">
                         <div class="cell colspan6">
                           <ul class="cls-profil">
                             <li><h2>{{ $userprofile->user->familia."  ".$userprofile->user->imia }}</h2></li>
                             <li>
                               <h5>E-mail :</h5>
                               <h4>{{ $user->email }}</h4>
                             </li>
                             <li>
                               <h5>Регион :</h5>
                               <h4>{{ $userprofile->location }}</h4>
                             </li>

                             <li class="cls-link-edit"> <a href="{{url('profil/edit/'.$user->id )}}">Редактировать профиль</a></li>
                           </ul>


                          </div>

                      </div>
                </div>
            </div>


         </div>
   </div>



</div>
@endsection
