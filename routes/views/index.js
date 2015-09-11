var keystone = require('keystone');
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {};

	view.on('init', function (next) {

		var q = keystone.list('Slider').model
			.find({
				isPublished: true
			})
			.sort('index');

		q.exec(function (err, results) {
			locals.data.sliders = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var q = keystone.list('Card').model
			.find({
				isPublished: true
			}).sort('index')
			.limit(4);

		q.exec(function (err, results) {
			locals.data.cards = results;
			next(err);
		});

	});
	view.on('init', function (next) {

		var q = keystone.list('Talent').model
			.find({
				isPublished: true
			}).sort('index');

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
			.find({
				isPublished: true
			})
			.sort('index')
			.limit(6);

		q.exec(function (err, results) {
			locals.data.news = results;
			next(err);
		});

	});

	view.render('com/index');

};
