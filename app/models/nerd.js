var mongoose = require('mongoose');

// define our nerd model.
module.exports = mongoose.model('Nerd', {
	name: {
		type: String,
		required: true,
		default: ''
	}
});
