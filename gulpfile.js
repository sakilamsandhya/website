var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

gulp.task('less', function () {
    gulp.src(['assets/less/bootstrap.less'])  
            .pipe(less({errLogToConsole: true}))
            .pipe(concat('bootstrap.css'))
            .pipe(gulp.dest('assets/css'))
            .pipe(minifyCSS())
            .pipe(concat('bootstrap.min.css'))
            .pipe(gulp.dest('assets/css'));
});
/*--  Watch Task  --*/
gulp.task('watch', function () {
    watch('assets/theme/**/*.less', function () {
        gulp.start('less');
    });
});
/*--  Default Task  --*/
gulp.task('default', ['less']);
