var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(){
	// aqui va mi tarea
	gulp.src('src/js/*.js')
	//verifica los errores que arroja JS
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	//minimiza mis archivos
	.pipe(concat('script.min.js'))
	//para minimizar mis archivos
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));

});

gulp.task('style', function() {
	// describo mi tarea
	gulp.src('src/sass/main.scss')
	// transformo los sass
	.pipe(sass().on('error', sass.logError))
	//minimizo los archivos
	.pipe(minifyCSS())
	//dejarlo en archivo de destino
	.pipe(concat('main.min.css'))
	//dejo los archivos en la carpeta dist/css
	.pipe(gulp.dest('dist/css'));
});

gulp.task('images', function() {
	//creo mi tarea
	gulp.src('src/img/*')
	//dejo los archivos en la carpeta dist/css
	.pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['images', 'style', 'script']);