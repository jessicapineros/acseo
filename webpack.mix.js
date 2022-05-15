const { sourceMaps } = require('laravel-mix');
let mix = require('laravel-mix');

mix.js('assets/src/js/app.js', 'assets/dist/js').sourceMaps();
mix.sass('assets/src/scss/style.scss', 'assets/dist/css').sourceMaps();

mix.copyDirectory('assets/src/img', 'assets/dist/img', false);
