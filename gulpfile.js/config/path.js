
const pathSrc = ('./app/src');
const pathDest = ('./app/dest');
// const imagepath = ('/Users/vadzimmas/Desktop/Gulp-start/app/src/img');

module.exports = {
    dest: pathDest,
    html: {
        src: pathSrc + '/*.html',
        watch: pathSrc + '/**/*.html',
        dest: pathDest,
    },

    css: {
        src: pathSrc + '/css/style.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css',
    },

    js: {
        src: pathSrc + '/js/main.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js',
    },

    img: {
        src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,!svg}',
        watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
        dest: pathDest + '/img',
    },

    fonts: {
        src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/fonts',
        destFontFace: pathSrc + '/css',
    }
}
