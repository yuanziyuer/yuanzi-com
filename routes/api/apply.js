var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var Apply = keystone.list('Apply');
	var params = req.body;
	console.log('=================================params', params);
	var newApply = new Apply.model({
		title: 'New Post'
	});


	newApply.save(function(err, result) {
		console.log('=================================err,result', err,result);
		// post已保存	
	});
	
};
