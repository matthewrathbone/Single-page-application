// Modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var api = require('./app/routes');
// Configuration
var db = require('./config/db');

// Set the port
var port = process.env.PORT || 8080;

// Connect to mongodb
mongoose.connect(db.url);

// Parse application/json
app.use(bodyParser.json());

// Parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// Set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', api);

app.listen(port, function () {
	console.log('Server running on port ' + port);
});

exports = module.exports = app;
