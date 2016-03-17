@extends('layouts.admin')

@section('content')
<div class="container">
  <div class="grid">
      <div class="row cells12">
          <div class="cell colspan12">
            <h3 class="text-light">Настроийки </h3>
              <hr>
          </div>
      </div>
   </div>

   <div class="grid">

         <div class="row cells12">
           <div class="cell colspan12">
                @include('flash::message')
           </div>
         </div>

         <div class="row cells12">
           <div class="cell colspan12">

             <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Смена логина
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body">
                      {!! Form::model($user, array('route' => 'email_edit', 'method' => 'post')) !!}
                      <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
                      {!! csrf_field() !!}

                        <!-- user id -->
                        <input name="user_id" type="hidden" value="{!! $user->id !!}" />
                          <div class="row cells12">

                                <div class="row cells12">
                                      <div class="cell colspan12">
                                          <h5>E-mail </h5>
                                           <div class="full-size input-control text">
                                                <input type="email" name="email" required>
                                           </div>
                                      </div>

                                  </div>

                                  <div class="row cells12">
                                       <div class="cell colpsan6">
                                           <input type="submit"  value="Сохранить изменения" class="button primary">
                                       </div>
                                    </div>


                          </div>

                      {!! Form::close() !!}
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Смена пароля
                      </a>
                    </h4>
                  </div>
                  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div class="panel-body">
                      {!! Form::model($user, array('route' => 'password_edit', 'method' => 'post')) !!}
                      <input name="_token" type="hidden" value="{!! csrf_token() !!}" />
                      {!! csrf_field() !!}

                          <!-- user id -->
                          <input name="user_id" type="hidden" value="{!! $user->id !!}" />

                            <div class="row cells12">
                              <div class="cell colspan6">
                                   <h5>Текущий пароль</h5>
                                   <div class="full-size input-control text">
                                       <input type="password" name="oldpassword" required>
                                   </div>
                               </div>

                               <div class="cell colspan6">
                                     <h5>Новый пароль</h5>
                                     <div class="full-size input-control text">
                                         <input type="password" name="newpassword" required>
                                     </div>
                               </div>
                           </div>

                           <div class="row cells12">
                             <div class="cell colpsan6">
                                 <input type="submit"  value="Сохранить изменения" class="button primary">
                             </div>
                           </div>

                         </div>


                      {!! Form::close() !!}
                    </div>
                  </div>
                </div>
                {{-- <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Collapsible Group Item #3
                      </a>
                    </h4>
                  </div>
                  <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div class="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div> --}}
              </div>

           </div>
         </div>
   </div>
</div>
@endsection
