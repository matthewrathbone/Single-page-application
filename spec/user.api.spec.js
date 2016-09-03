var chaiHttp = require('chai-http');
var chai = require('chai');
chai.should();
chai.use(chaiHttp);

var api = 'http://localhost:8080';

describe('API Unit Test', function () {
	it('should get the homepage', function (done) {
		chai.request(api)
			.get('/')
			.end(function (err, res) {
				if (err) done(err);
				res.should.have.status(200);
				res.should.be.html;
				done();
			});
	});
	it('should get the nerds array', function (done) {
		chai.request(api)
			.get('/api/nerds')
			.end(function (err, res) {
				if (err) done(err);
				res.should.have.status(200);
				res.body.should.be.an.array;
				done();
			});
	});
});
