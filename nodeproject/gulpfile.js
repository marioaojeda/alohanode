var gulp    = require('gulp');
var jsfiles = ['*.js', 'src/**/*.js'];
var jshint  = require('gulp-jshint');

gulp.task('style', function(){
    return gulp.src(jsfiles)
        .pipe(jshint());
});

gulp.task('inject', function(){
    var wiredep         = require("wiredep").stream;
    var wiredepOptions  = {
        directory: './bower_components',
        bowerJson: require('./bower.json'),
        ignorePath: '../../bower_components'
    };
    
    var gulpInject          = require("gulp-inject");
    var gulpInjectsrc       = gulp.src(['./public/css/*.css', './public/js/*.js']);
    var gulpInjectOptions   = {
         ignorePath: '/public/'
     }
       
   return gulp.src('./src/views/*.html')
    .pipe(
        wiredep(
            wiredepOptions
        )
    )
    .pipe(
        gulpInject(
            gulpInjectsrc, 
            gulpInjectOptions
        )
    )
    .pipe(
        gulp.dest('./src/views')
    );
});
