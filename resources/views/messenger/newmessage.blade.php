@extends('layouts.LayoutMailClient')

@section('content')
<div class="container">

    <div class="grid">
        <div class="row cells12">
              <div class="cell colspan12">
                  <h4 class="text-light">Новое сообщение</h4>
              </div>
              <div class="row cells12">

                  {!! Form::open(['route' => 'messages.store']) !!}
                      <div class="col-md-6">
                        <!-- Subject Form Input -->
                        {!!  Form::hidden('From', $umail) !!}

                        <div class="form-group">
                            {{-- {!! Form::label('To', 'To', ['class' => 'control-label']) !!} --}}
                            {!! Form::text('email', null, ['class' => 'form-control']) !!}
                        </div>

                        <div class="form-group">
                            {!! Form::label('subject', 'Subject', ['class' => 'control-label']) !!}
                            {!! Form::text('subject', null, ['class' => 'form-control']) !!}
                        </div>

                        <!-- Message Form Input -->
                        <div class="form-group">
                            {!! Form::label('message', 'Message', ['class' => 'control-label']) !!}
                            {!! Form::textarea('message', null, ['class' => 'form-control']) !!}
                        </div>

                        <div class="input-control file" data-role="input">
                            <input type="file">
                            <button class="button"><span class="mif-folder"></span></button>
                        </div>

                        <div class="btn-toolbar" data-role="editor-toolbar" data-target="#msgsend">
                          <a class="btn btn-large" data-edit="bold"><i class="icon-bold"></i></a>
                          <div class="btn-group">
                            <a class="btn dropdown-toggle" data-toggle="dropdown" title="FontSize"><i class="icon-text-height"></i>&nbsp;<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li>
                                <li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li>
                                <li><a data-edit="fontSize 1"><font size="1">Small</font></a></li>
                            </ul>
                          </div>

                        </div> <!-- end btn-toolbar -->

                        {{-- <div class="btn-toolbar" data-role="editor-toolbar" target="#msgsend">
                            <div class="btn-group">
                              <a class="btn dropdown-toggle" data-toggle="dropdown" title="FontSize"><i class="icon-text-height"></i>&nbsp;<b class="caret"></b></a>
                              <ul class="dropdown-menu">
                                  <li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li>
                                  <li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li>
                                  <li><a data-edit="fontSize 1"><font size="1">Small</font></a></li>
                              </ul>
                            </div>

                            <div class="btn-group">
                                <a class="btn" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="icon-bold"></i></a>

                                <a class="btn" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="icon-italic"></i></a>
                                <a class="btn" data-edit="strikethrough" title="Strikethrough"><i class="icon-strikethrough"></i></a>
                                <a class="btn" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="icon-underline"></i></a>
                            </div>
                        </div> --}}

                        <!-- Submit Form Input -->
                        <div class="form-group">
                            {!! Form::submit('Submit', ['class' => 'btn btn-primary form-control']) !!}
                        </div>
                      </div>
                  {!! Form::close() !!}

              </div>
        </div>
    </div>
</div>






























@endsection
