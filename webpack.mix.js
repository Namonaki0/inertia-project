const mix = require('laravel-mix')

mix.js('resources/js/app', 'public/js').vue()
.postCss('resources/css/app', 'public/css', []);