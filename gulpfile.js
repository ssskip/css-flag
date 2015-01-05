var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  rename = require("gulp-rename");

gulp.task('scripts', function () {
  return gulp.src('flag.css').
    pipe(rename('flag.min.css')).
    pipe(minifyCSS({keepBreaks: false})).
    pipe(gulp.dest('.'));
});

gulp.task('default', function () {
  gulp.start('scripts');
});
