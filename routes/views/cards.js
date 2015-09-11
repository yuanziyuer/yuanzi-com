var keystone = require('keystone');
exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	

	view.on('init', function(next) {

		var q = keystone.list('Card').model
			.find({
				isPublished: true
			}).sort('index')
			.skip(4)
			.limit(16);
		
		q.exec(function(err, results) {
			locals.data = {
				cards: results
			};
			next(err);
		});

	});

	// Render the view
	view.render('com/pages/cards');

};
