"use strict"
var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
// Scripts task
// Uglify task
gulp.task("scripts", function() {
    gulp.src("js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
})
// style task
gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass({outputStyle: 'expended'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});
// browswer sync server
gulp.task("server", function() {
  browserSync.init({
    server: "./"
  });
});
// watch task
gulp.task("watch", function() {
    // liverelaod
    gulp.watch("js/*.js", ["scripts"]);
    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("*.html").on("change", reload);
});
// default
gulp.task("default", ["server","scripts", "sass", "watch"]);
