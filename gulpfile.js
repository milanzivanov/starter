"use strict"
var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    sass = require('gulp-sass');
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
    .pipe(gulp.dest('css'));
});
// watch task
gulp.task("watch", function() {
    gulp.watch("js/*.js", ["scripts"]);
    gulp.watch("sass/*.scss", ['sass']);
});
// default
gulp.task("default", ["scripts", "sass", "watch"]);


