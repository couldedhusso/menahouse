    {{-- <!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

    <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>

    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="title">Laravel 5</div>
            </div>
        </div>
    </body>
</html> --}}



@extends('templates.index')

@section('title', 'Page Title')

@section('content')

 {{-- <div class="jumbotron">
    <h2>sign up for free </h2>

    {!! link_to_route('auth_register', 'Sign up!',null , ['class' => 'btn btn-primary btn-lg']) !!}
</div> --}}

<div class="container">
    <div class="grid">
          <div class="row cells12">
              <div class="cell colspan8 cls-border"> dfg</div>
              {{-- <div class="cell"></div> --}}
              <div class="cell colspan4 cls-border"> dfg</div>
              {{-- <div class="cell"> dgt</div>
              <div class="cell"> erty </div> --}}
          </div>
    </div>
</div>
@endsection
