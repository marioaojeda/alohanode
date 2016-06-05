var gulp = require('gulp');
var jsfiles = ['*.js', 'src/**/*.js'];
var jshint = require('gulp-jshint');

gulp.task('style', function(){
    return gulp.src(jsfiles)
        .pipe(jshint());
});