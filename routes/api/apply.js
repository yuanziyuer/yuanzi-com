var keystone = require('keystone');

exports = module.exports = function(req, res, next) {
	var Apply = keystone.list('Apply');
	var params = req.body;
	var newApply = new Apply.model(params);

	newApply.save(function(err) {
		if(err){
			next(err);
		}else{
			var view = new keystone.View(req, res);

			view.render('com/pages/apply');
		}
	});
};
