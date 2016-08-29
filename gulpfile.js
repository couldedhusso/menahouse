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
  //  mix.sass('app.scss');

  mix.styles([

  'bootstrap/css/bootstrap.css',
  'css/bootstrap-select.min.css',
  'css/jquery.slider.min.css',
  'css/owl.carousel.css',
  'css/owl.transitions.css',
  'css/fileinput.min.css',
  'css/magnific-popup.css',
  'css/jcarousel.skeleton.css',
  'css/style.css',
  'css/angular.rangeSlider.css',
  'css/angular.rangeSlider.sm.css'

], null, 'public/assets');


mix.scripts([
      'jquery-2.1.0.min.js',
      'jquery-migrate-1.2.1.min.js',
      'smoothscroll.js',
      'bootstrap-select.min.js',
      'smoothscroll.js',
      'retina-1.1.0.min.js',
      'jshashtable-2.1_src.js',
      'jquery.numberformatter-1.2.3.js',
      'tmpl.js',
      'jquery.dependClass-0.1.js',
      'draggable-0.1.js',
      'jquery.slider.js',
      'custom-map.js',
      'sm.js',
      'owl.carousel.min.js',
      'jquery.validate.min.js',
      'icheck.min.js',
      'jquery.magnific-popup.min.js',
      'fileinput.min.js',
      'jquery.vanillabox-0.1.5.min.js',
      'angular.min.js',
      'angular.rangeSlider.js'

], null, 'public/assets/js') ;

mix.scripts([
  'bootstrap.min.js'
], null, 'public/assets/bootstrap/js') ;


mix.scripts([
    'menahouseInit.js'
], null, 'public/js/src') ;

  mix.version(['public/css/all.css', 'public/js/all.js']);
});
