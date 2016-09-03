// Grab our model
var Nerd = require('./models/nerd');
var path = require('path');

module.exports = function (app) {
	app.get('/api/nerds', function (req, res) {
		// Use mongoose to get all nerds in the database
		Nerd.find({}, function (err, nerds) {
			if (err) res.send(err);
			res.json(nerds);
		});
	});

	// Route to handle all angular requests
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
};
