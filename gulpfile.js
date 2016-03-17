var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.styles([
    'vendor/normalize.min.css',
    'vendor/bootstrap.min.css',
    'theproject.css',
    'vendor/styles-mdl.css',
    'vendor/material.min.css',
    'vendor/metro.css',
    'vendor/metro-responsive.css',
    'vendor/basic.css',
    'vendor/jquery.bxslider.css',
    'vendor/dropzone.css',
    // 'vendor/component.css',
    'masterstyle.css',

    'app.css'

  ], null, 'public/css');

  // mix.scripts([
  //     'js/jquery-2.1.0.min.js',
  //     'js/jquery-migrate-1.2.1.min.js',
  //     // 'bootstrap/js/bootstrap.min.js',
  //     'js/smoothscroll.js',
  //     'js/owl.carousel.min.js',
  //     'js/bootstrap-select.min.js',
  //     'js/jquery.validate.min.js',
  //     'js/jquery.placeholder.js',
  //     'js/icheck.min.js',
  //     'js/jquery.vanillabox-0.1.5.min.js',
  //     'js/retina-1.1.0.min.js',
  //     'js/jshashtable-2.1_src.js',
  //     'js/jquery.numberformatter-1.2.3.js',
  //     'js/tmpl.js',
  //     'js/jquery.dependClass-0.1.js',
  //     'js/draggable-0.1.js',
  //     'js/jquery.slider.js',
  //     'js/custom.js'
  //
  // ], null, 'public/assets') ;

mix.scripts([
    'vendor/bootstrap.min.js',
    'vendor/material.min.js',
    'vendor/metro.js',
    'vendor/dropzone.js',
    'vendor/jquery.bxslider.min.js',
    'vendor/widgets/accordion.js'

], null, 'public/js') ;




  mix.version(['public/css/all.css', 'public/js/all.js']);
});
