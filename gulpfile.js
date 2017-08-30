var gulp        = require('gulp');
var path        = require('path');
var compass   = require('gulp-compass');
var plumber   = require('gulp-plumber');
var webserver = require('gulp-webserver');
var minifycss   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babel          = require('gulp-babel');
var webpackStream = require('webpack-stream');
var webpack     = require('webpack');
var uglify          = require('gulp-uglify');
var gulpif          = require('gulp-if');
var concat        = require('gulp-concat');
var del             = require('del');

var srcDir = './src/';
var distDir = './build/';

var autoprefixerOptions = {
  browsers: ['last 3 version', 'ie >=9', 'Android 4.0']
};

var isUglify = function(){
  if(typeof process.argv[3] !== "undefined" && process.argv[3] === '-prod'){
    return true;
  }else{
    return false;
  }
}

var webpackConfig = require('./webpack.config');

// js
gulp.task('babel', function(){
  var srcGlob = path.join( srcDir, 'js', '**/*.js');
  var distGlob = path.join( distDir, 'js');
  gulp.src(srcGlob)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(distGlob));
});

gulp.task('webpackJS', function(){
  webpackStream(webpackConfig, webpack)
    .pipe(gulpif(isUglify(), uglify()))
    .pipe(gulp.dest(distDir));
});

// compass
gulp.task('compass', function(){
  var srcGlob = path.join( srcDir, 'sass', '**/*.scss');
  var srcSassPath = path.join( srcDir, 'sass');
  var distGlob = path.join( distDir, 'css' );

  gulp.src(srcGlob)
    .pipe(plumber())
    .pipe(compass({
      config_file: path.join(srcDir, './config.rb') ,
      comments: false,
      sass: srcSassPath
    }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(concat('style.css'))
    .pipe(minifycss())
    .pipe(gulp.dest(distDir));
});

//clean
gulp.task('clean', function(){
  del(distDir);
});

//webserver
gulp.task('webserver', function(){
  gulp.src(path.join(distDir, '.'))
    .pipe(webserver({
      host: 'localhost',
      port: 8000,
      livereload: true
    }));
});

// watch
gulp.task('watch', function(){
  gulp.watch(path.join(srcDir, 'sass', '**/*.scss'), ['compass']);
});

// copy
gulp.task('copy', function(){
  var copySource = [path.join(srcDir, '*.html'), path.join(srcDir, 'images', '**/*.*')];
  gulp.src(copySource, {base: srcDir})
    .pipe(gulp.dest(distDir));
});

gulp.task('build', ['clean', 'webpackJS', 'compass', 'copy']);

gulp.task('default', ['build','watch', 'webserver']);