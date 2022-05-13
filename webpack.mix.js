const { sourceMaps } = require('laravel-mix');
let mix = require('laravel-mix');
// const tailwindcss = require('tailwindcss');

mix.js('assets/src/js/app.js', 'assets/dist/js') .sourceMaps();
mix.sass('assets/src/scss/style.scss', 'assets/dist/css')
    // .options({
    //     postCss: [
    //         require('autoprefixer'),
    //         tailwindcss('tailwind.config.js'),
    //     ],
    //     processCssUrls: false,
    // })
    .sourceMaps();

mix.copyDirectory('assets/src/img', 'assets/dist/img', false);
