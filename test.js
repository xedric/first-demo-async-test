var expect = require('chai').expect;
var getInfo = require('./async').getInfo;
var getInfoLang = require('./async').getInfoLang;
var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe.skip('Get GitHub Info', function() {

	it('returns information from GitHub', function(done) {
		getInfo(function(reply) {
			expect(reply.language).to.equal('JavaScript');
			expect(reply.owner.login).to.equal('xedric');
			done();
		});
	});
});

describe('Get the language of a repo', function() {
	it('returns language', function(done) {
		var ghLang = {
			'language': 'GUGGE'
		};
		var stub = sinon.stub().callsArgWith(0, ghLang);

		getInfoLang(stub, function(reply) {
			expect(reply).to.equal('Language is GUGGE');
			done();
		});
	});
});
