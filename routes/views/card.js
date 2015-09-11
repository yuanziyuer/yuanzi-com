var keystone = require('keystone');
var _ = require('lodash');
exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var cardId = req.params.cardId;

	view.on('init', function(next) {

		var q = keystone.list('Card').model.findById(cardId);

		q.exec(function(err, result) {
			locals.data = {
				card: result
			};
			next(err);
		});

	});

	view.on('init', function(next) {

		var q = keystone.list('Card').model
			.find({
				isPublished: true,
				_id: {
					'$ne': cardId
				}
			}).sort('index')
			.limit(2);

		q.exec(function(err, results) {
			locals.data.otherCards =  _.map(results, function (item) {
					delete item.content;
					return item;
				});
			next(err);
		});

	});
	
	// Render the view
	view.render('com/pages/card');

};
