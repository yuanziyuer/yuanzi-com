var keystone = require('keystone');
var _ = require('lodash');
exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	

	view.on('init', function(next) {

		var q = keystone.list('Card').model
			.find({
				isPublisted: true
			}).sort('index')
			.skip(0)
			.limit(16);
		
		q.exec(function(err, results) {
			locals.data = {
				cards: _.map(results, function (item) {
					item.cardId = item._id;
					delete item.content;
					return item;
				})
			};
			next(err);
		});

	});

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.defaultImg = 'http://assets.iyuanzi.net/cardDescription/public/images/blank.gif';

	// Render the view
	view.render('com/pages/cards');

};
