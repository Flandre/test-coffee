var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['coffee']);