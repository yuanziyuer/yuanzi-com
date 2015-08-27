var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']
};


// gulp lint
gulp.task('lint', function(){
	gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));

});

// gulp watcher for lint
gulp.task('watch:lint', function () {
	gulp.src(paths.src)
		.pipe(watch())
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

// gulp watcher for sass
gulp.task('watch:sass', ['sass'], function () {
	gulp.watch('./public/styles/**/*.scss', [
		'sass'
	]);
});

// sass任务：将.scss文件转换为css,放在stylesheets下
gulp.task('sass', function () {
	gulp.src('./public/styles/site.scss').pipe(sass.sync({ indentedSyntax: true }).on('error', sass.logError)).pipe(gulp.dest('./public/styles/'));
});
