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
			locals.data.sliders = results.map(function (item) {
				item.cover.url = item._.cover.crop(1280, 650, {
					crop: 'crop',
					gravity: 'faces:center',
				});
				item.cover2x.url = item._.cover2x.crop(1280, 650, {
					crop: 'crop',
					gravity: 'faces:center',
				});
				return item;
			});
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
			locals.data.users = results.map(function (item) {
				item.cover.url = item._.cover.crop(1280, 650, {
					crop: 'crop',
					gravity: 'faces:center',
				});
				item.cover2x.url = item._.cover2x.crop(1280, 650, {
					crop: 'crop',
					gravity: 'faces:center',
				});
				return item;
			
			});
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
