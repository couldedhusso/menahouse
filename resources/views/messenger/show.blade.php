
@extends('templates.TemplateDashboard')

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
<div class="container">
   <div class=" grid">
     {{-- <div class="row cells8">
         <div class="cell colspan8">
              <h4 class="text-light">{!! $um->subject !!}</h4>
              <hr>
         </div>
     </div> --}}

     <div class="row cells12">
        <div class="cell colspan8">
            <div class="grid">
                  <div class="row cells12">
                     <div class="cell colspan12">
                       <h4 class="text-light">{!! $um->subject !!}</h4>
                       <hr>
                      </div>
                  </div>

                  <div class="row cells12">

                     <?php  $sender = $um->getSenderInfos($um->fromid); ?>
                     <div class="cell colspan1">
                        <img src="{{ asset('storage/profil').'/'.$sender->path }}" class="img-circle sender-avatar-medium">
                     </div>

                     <div class="cell colspan11">
                        <p> <strong> {!! $sender->familia." ".  $sender->imia !!} </strong><br>
                          <small>Posted {!! $um->created_at->diffForHumans() !!}</small>
                        </p>

                        <div class="row cell11 cls-content-msg">
                            <div class="cell colspan11">
                                <p>{!! $um->body !!}</p>
                            </div>
                        </div>

                        @if( $um->fichiers_joints)

                            <div class="row cell11 cls-content-msg">

                                <div class="cell colspan4">
                                    @foreach($um->images as $pics )
                                      <div class="cell">

                                            <div class="image-container">
                                                  <div class="frame">  <img src="{{ asset('storage/fichiers_joints').'/'.$pics->path }}" alt="" /></div>
                                                        <a class="cls-download-img" href="{{ asset('storage/fichiers_joints').'/'.$pics->path }}" download>
                                                           <div class="image-overlay op-taupe">
                                                             <span>
                                                               <i class="margin40 material-icons">&#xE2C4;</i>
                                                               {{-- <h3> <i class="margin40 material-icons" role="presentation">file_download</i> </h3> --}}
                                                              </span>
                                                           </div>
                                                        </a>
                                            </div>

                                      </div>
                                    @endforeach
                                </div>
                            </div>

                        @endif



                        <div class="row cell11 cls-content-msg">
                          <div class="cell colspan11">
                                {!! Form::open(array('route' => 'reply_msg', 'method' => 'post', 'files' => 'true')) !!}
                                      <input name="_token" type="hidden" value="{!! csrf_token() !!}" />

                                      <input name="subject" type="hidden" value="{!! $um->subject !!}" />
                                      <input name="sender" type="hidden" value="{!! Auth::user()->id !!}" />
                                      <input name="receiver" type="hidden" value="{!! $sender->user_id !!}" />

                                      <div class="cell colspan11">
                                          <div class="input-control full-size textarea">
                                              <textarea name="body" placeholder="нажмите здесь, чтобы ответить" required></textarea>
                                          </div>
                                      </div>

                                      <div class="row cells11">
                                        <div class="cell colspan3">
                                            <input type="submit" value="Ответить" class="button cls-btn primary">
                                        </div>


                                        <div class="cell colspan6">
                                            <div class="toolbar">
                                                <div>
                                                    <span data-role="hint" data-hint-background="bg-gray" data-hint-color="fg-white" data-hint-mode="2" data-hint-position="top" data-hint="|прикрепить файлы">
                                                        <span class="toolbar-button select-file ">
                                                            {{-- <i class="material-icons" role="presentation">attachment</i> --}}
                                                            {{-- {!! Form::file('files[]', array('multiple'=>true, 'id'=>'file-upload')) !!} --}}
                                                              {!! Form::file('pics[]', array('multiple'=>true, 'id'=>'file-upload')) !!}

                                                              {{-- <input type="file" name="pics" id="file-upload" multiple/> --}}
                                                        </span>


                                                    </span>

                                                    <span  data-role="hint" data-hint-background="bg-gray" data-hint-color="fg-white" data-hint-mode="2" data-hint-position="top" data-hint="|жаловаться на агента">

                                                        <button class="toolbar-button"> <i class="material-icons mdl-color-text--blue-grey-400" role="presentation">report</i>
                                                        </button>
                                                     </span>
                                                </div>
                                           </div>

                                        </div>


                                      </div>

                                {!! Form::close() !!}
                           </div>
                        </div>

                      </div>

                  </div>


                {{-- <div class="row cells12">

                  <div class="cell colpsan6">
                    <h5></h5>
                      <input type="submit"  value="Сохранить изменения" class="button primary">
                  </div>
                </div> --}}

            </div>
        </div>

        <div class="cell colspan4 ">
            <div id="image-preview">
                {{-- <label for="image-upload" id="image-label">Choose File</label>
                <input type="file" name="image" id="image-upload" /> --}}
            </div>
        </div>
     </div>


   </div>
</div>
@endsection
