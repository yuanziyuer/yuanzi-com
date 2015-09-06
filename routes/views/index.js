var keystone = require('keystone');
var then = require('thenjs');
var _ = require('lodash');
var sliderPrefix = '/slider/';
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {};

	view.on('init', function (next) {

		var q = keystone.list('Slider').model
			.find()
			.sort('index');

		q.exec(function (err, results) {
			locals.data.sliders = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var q = keystone.list('Card').model
			.find({
				isPublisted: true
			}).sort('index')
			.limit(4);

		q.exec(function (err, results) {
			locals.data.cards = results;
			next(err);
		});

	});
	view.on('init', function (next) {

		var q = keystone.list('Daren').model
			.find();

		q.exec(function (err, results) {
			locals.data.users = results;
			next(err);
		});

	});
	view.on('init', function (next) {

		var q = keystone.list('Text').model
			.findOne();

		q.exec(function (err, results) {
			locals.data.texts = results;
			next(err);
		});

	});
	view.on('init', function (next) {

		var q = keystone.list('News').model
			.find()
			.sort('index');

		q.exec(function (err, results) {
			locals.data.news = results;
			next(err);
		});

	});

	locals.section = 'home';

	locals.defaultImg = 'http://assets.iyuanzi.net/cardDescription/public/images/blank.gif';

	view.render('com/index');

};
