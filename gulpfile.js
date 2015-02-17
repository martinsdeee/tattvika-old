var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less')
        .copy(
             'vendor/bower_components/jquery/dist/jquery.min.js',
             'public/vendor/jquery/js/jquery.js'
        )
        .copy(
            'vendor/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min.js',
            'public/vendor/bootstrap/js/bootstrap.js'
        )
        .copy(
            'vendor/bower_components/font-awesome/css/font-awesome.min.css',
            'public/vendor/font-awesome/css/font-awesome.css'
        )
        .copy(
            'vendor/bower_components/font-awesome/fonts',
            'public/vendor/font-awesome/fonts'
        )
        .copy(
            'vendor/bower_components/chartjs/Chart.min.js',
            'public/vendor/chart/js/chart.js'
        )
        .copy(
            'vendor/bower_components/angular/angular.min.js',
            'public/vendor/angular/js/angular.js'
        )
        .copy(
            'vendor/bower_components/angular-animate/angular-animate.min.js',
            'public/vendor/angular-animate/js/angular-animate.js'
        )
        .copy(
            'vendor/bower_components/angular-aria/angular-aria.min.js',
            'public/vendor/angular-aria/js/angular-aria.js'
        )
        .copy(
            'vendor/bower_components/angular-material/angular-material.min.js',
            'public/vendor/angular-material/js/angular-material.js'
        );
});