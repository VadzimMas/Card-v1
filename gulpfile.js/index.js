
// all plagins and packages conected to global object for clean code
const glob = require('./config/global.js');

// individual run
exports.clear = global.clear;
exports.css = global.css;
exports.script = global.script;
exports.html = global.html;
exports.img = global.img;
exports.watcher = global.watcher;
exports.server = global.server;
exports.fonts = global.fonts;

// build
exports.dev = global.gulp.series(
    global.clear, global.fonts,
    global.gulp.parallel(global.html, global.css, global.script, global.img),
    global.gulp.parallel(global.watcher, global.server)
)