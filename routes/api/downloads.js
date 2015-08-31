var keystone = require('keystone');

exports = module.exports = function(req, res) {

	keystone.list("User").model.find().exec(function(err, results) {
		if (err) { throw err; }

		var users = results.map(function(user) {
			return {
				firstName: user.name.first,
				lastName: user.name.last,
				email: user.email
			};
		});

			res.send(data);
	});
};
