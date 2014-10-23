// File: Gulpfile.js
'use strict';
//Comando para instalar las funciones  de gulp
// Primero instalar Gulp
//$ npm install -g gulp
//ubicarse en el directorio o carpeta del proyecto
//$ npm install -save-dev gulp
var gulp = require('gulp'),
//$ npm install -save-dev gulp-connect
	connect = require('gulp-connect'),
//$ npm install -save-dev gulp-stylus
	stylus = require('gulp-stylus'),
//$ npm install -save-dev nib
	nib = require('nib'),
//$ npm install -save-dev gulp-jshint
	jshint = require('gulp-jshint'),
//$ npm install -save-dev gulp-stylish
	stylish = require('jshint-stylish'),
//$ npm install --save-dev connect-history-api-fallback
	historyApiFallback = require('connect-history-api-fallback');
//$ npm install -save-dev gulp-inject
var inject = require('gulp-inject');
//$ npm install -save-dev wiredep
var wiredep = require('wiredep').stream;

	
// Servidor web de desarrollo
gulp.task('server', function() {
	connect.server({
		root: './app',
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true,
		middleware: function(connect, opt) {
			return [ historyApiFallback ];
		}
	});
});

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
	return gulp.src('./app/js/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

// Preprocesa archivos Stylus a CSS y recarga los cambios
gulp.task('css', function() {
	gulp.src('./app/css/main.styl')
		.pipe(stylus({ use: nib() }))
		.pipe(gulp.dest('./app/css'))
		.pipe(connect.reload());
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function() {
	gulp.src('./app/**/*.html')
		.pipe(connect.reload());
});

// Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.html
gulp.task('inject', function() {
	var sources = gulp.src(['./app/js/**/*.js','./app/css/**/*.css']);
	return gulp.src('index.html', {cwd: './app'})
		.pipe(inject(sources, {
			read: false,
			ignorePath: '/app'
		}))
		.pipe(gulp.dest('./app'));
});

// Inyecta las librerias que instalemos vía Bower
gulp.task('wiredep', function () {
	gulp.src('./app/index.html')
		.pipe(wiredep({
			directory: './app/lib'
		}))
		.pipe(gulp.dest('./app'));
});

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
	gulp.watch(['./app/**/*.html'], ['html']);
	gulp.watch(['./app/css/**/*.styl'], ['css']);
	gulp.watch(['./app/js/**/*.js'], ['jshint']);
	gulp.watch(['./app/css/**/*.styl'], ['css', 'inject']);
	gulp.watch(['./app/js/**/*.js', './Gulpfile.js'], ['jshint', 'inject']);
	gulp.watch(['./bower.json'], ['wiredep']);
});

gulp.task('default', ['server', 'inject', 'wiredep', 'watch']);
