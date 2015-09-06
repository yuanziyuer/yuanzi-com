var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	lazy: true
});
var jshint = plugins.jshint;
var jshintReporter = require('jshint-stylish');
var watch = plugins.watch;
var sass = plugins.sass;
var shell = plugins.shell;
var minimist = require('minimist');
var nodemon = plugins.nodemon;
var fs = require('fs');
var BrowserSync = require('browser-sync').create();
var reload = BrowserSync.reload;

var knownOptions = {
	string: 'env',
	default: { env: process.env.NODE_ENV || 'development' }
};
var options = minimist(process.argv.slice(2), knownOptions);

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

// sass任务：将.scss文件转换为css,放在stylesheets下
gulp.task('sass', function () {
	gulp.src('./public/styles/site.scss').pipe(sass.sync({ indentedSyntax: true }).on('error', sass.logError)).pipe(gulp.dest('./public/styles/'));
});

// shipit任务：部署代码到远程服务器
gulp.task('deploy', shell.task(['shipit ' + options.env + ' deploy'], {
	errorMessage: 'deploy fail'
}));
/**
 * 使用 nodemone 启动服务器,启动之前先执行sass事件
 */
gulp.task('start', [
	'sass'
], function () {
	var nodemonConfig = JSON.parse(fs.readFileSync('./nodemon.json'));
	nodemon(nodemonConfig);
	gulp.start('watch');
});

/**
 * watch监控任务：监控sass，stylesheets，javascripts下的文件变动，
 * 				当文件发生变动时自动刷新浏览器相关页面；
 */
gulp.task('watch', ['sass'], function () {
	BrowserSync.init({
		proxy: "localhost:3000"
	});
	// 监控文件的变动
	gulp.watch('./public/styles/**/*.scss', [
		'sass'
	]);
	gulp.watch(['./keystone.js', './public/**/*', './models/**/*', './routes/**/*', './templates/**/*',]).on('change', reload);

});
