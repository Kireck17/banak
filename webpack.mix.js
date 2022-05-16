const mix = require('laravel-mix');

mix.js('js/theme.js', '../assets/js').sourceMaps();
mix.postCss('css/theme.css', '../assets/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
]);