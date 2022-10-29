const watcher = () => {
    global.gulp.watch(global.path.html.watch, global.html);
    global.gulp.watch(global.path.css.watch, global.css);
    global.gulp.watch(global.path.js.watch, global.script);
    global.gulp.watch(global.path.img.watch, global.img);
    global.gulp.watch(global.path.fonts.watch, global.fonts);
}

module.exports = watcher;