var keystone = require('keystone');

exports = module.exports = function(req, res) {
	console.log('************************************************');
	var view = new keystone.View(req, res);
	

	// Render the view
	view.render('com/pages/apply');

};
