var gulp = require('gulp');
var jsfiles = ['*.js', 'src/**/*.js'];
var jshint = require('gulp-jshint');

gulp.task('style', function(){
    return gulp.src(jsfiles)
        .pipe(jshint());
});

gulp.task('inject', function(){
    var wiredep = require("wiredep").stream;
    var options = {
        directory: './bower_components',
        bowerJson: require('./bower.json'),
        ignorePath: '../../bower_components'
    };
   
   return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(gulp.dest('./src/views'));
});