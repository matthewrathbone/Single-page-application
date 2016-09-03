var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
require('sinon-mongoose');

var Nerd = require('../app/models/nerd');

describe('Testing the nerd model for validation', function () {
	describe('Nerd', function () {
		it ('should be invalid if the name is empty', function (done) {
			var nerd = new Nerd();
			nerd.validate(function (err) {
				expect(err.errors.name).to.exist;
				done();
			});
		});
	});
	describe('should get all nerds', function () {
		it('should return them all', function (done) {
			var NerdMock = sinon.mock(Nerd);
			var expectedResults = { status: true, nerds: [] };
			NerdMock.expects('find').yields(null, expectedResults);
			Nerd.find(function (err, results) {
				if (err) console.log(err);
				NerdMock.verify();
				NerdMock.restore();
				expect(results.status).to.be.true;
				done();
			});
		});
		it('should return an error if there is one', function (done) {
			var NerdMock = sinon.mock(Nerd);
			var expectedResult = { status: false, error: 'Something went wrong' };
			NerdMock.expects('find').yields(expectedResult, null);
			Nerd.find(function (err, result) {
				if (err) console.log(err);
				NerdMock.verify();
				NerdMock.restore();
				expect(err.status).to.not.be.true;
				done();
			});
		});
	});
});
