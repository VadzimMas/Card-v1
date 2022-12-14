global = {
    //tasks
    clear: require('../tasks/clear.js'),
    css: require('../tasks/css.js'),
    script: require('../tasks/script.js'),
    fonts: require('../tasks/fonts.js'),
    html: require('../tasks/html.js'),
    img: require('../tasks/img.js'),
    watcher: require('../tasks/watcher.js'),
    server: require('../tasks/server.js'),


    //configuration
    path: require('./path.js'),

    //fonts

    //plagins
    browserSync: require('browser-sync').create(),
    gulp: require('gulp'),
    del: require('del'),
    fileinclude: require('gulp-file-include'),
    htmlmin: require('gulp-htmlmin'),
    size: require('gulp-size'),
    plumber: require('gulp-plumber'),
    notify: require('gulp-notify'),
    replace: require('gulp-replace'),
    cssimport: require('gulp-cssimport'),
    autoprefixer: require('gulp-autoprefixer'),
    csso: require('gulp-csso'),
    rename: require('gulp-rename'),
    groupCssMediaQueries: require('gulp-group-css-media-queries'),
    newer: require('gulp-newer'),
    imagemin: require('gulp-imagemin'),
    fonter: require('gulp-fonter'),
    ttf2woff2: require('gulp-ttf2woff2'),
    concat: require('gulp-concat'),
    fontfaceGen: require('gulp-fontfacegen-extended'),
    sharpResponsive: require('gulp-sharp-responsive'),
    clean: require('gulp-clean'),
    debug: require('gulp-debug'),



}