var keystone = require('keystone');
var _ = require('lodash');
exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var newsId = req.params.newsId;

	view.on('init', function(next) {

		var q = keystone.list('News').model.findById(newsId);

		q.exec(function(err, result) {
			locals.data = {
				news: result
			};
			next(err);
		});

	});

	view.on('init', function(next) {

		var q = keystone.list('News').model
			.find({
				isPublished: true,
				_id: {
					'$ne': newsId
				}
			}).sort('index');

		q.exec(function(err, results) {
			locals.data.otherNews =  _.map(results, function (item) {
				delete item.content;
				return item;
			});
			next(err);
		});

	});

	// Render the view
	view.render('com/pages/news');

};
