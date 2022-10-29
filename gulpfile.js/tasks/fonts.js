const fonts = () => {
    return global.gulp.src(global.path.fonts.src)
        // throws message if something wrong
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'FONT',
                message: error.message
            })),
        }))
        //checks if fonts exists
        .pipe(global.newer(global.path.fonts.dest))
        // converts to ttf woff eot svg
        .pipe(global.fonter({
            formats: ['ttf', 'woff', 'eot', 'svg']
        }))
        .pipe(global.gulp.dest(global.path.fonts.dest))
        // converts ttf to woff2
        .pipe(global.ttf2woff2())
        .pipe(global.gulp.dest(global.path.fonts.dest))
        // add font face to css
        .pipe(global.gulp.src(global.path.fonts.src))
        .pipe(global.fontfaceGen({
            filepath: global.path.fonts.destFontFace,
            filename: "fonts.css",
            destpath: "../fonts",
        }))
        // updates browser
        .pipe(global.browserSync.stream())
}

module.exports = fonts;