const expect = require('chai').expect;
const jwt = require('jsonwebtoken');
const sinon = require('sinon');

const authMiddleware = require('../middleware/is-auth');

describe('Auth middleware', function () {
	it('should throw an error if no authorization header is present', function () {
		const req = {
			get: function () {
				return null;
			},
		};

		// preparing the object so that mocha can run this
		// so we use 'bind'
		expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
			'Not authenticated'
		);
	});

	it('should throw an error if the authorization header is only one string', function () {
		const req = {
			get: function () {
				return 'xyz';
			},
		};

		// if you're not sure or don't care about error message
		expect(authMiddleware.bind(req, {}, () => {})).to.throw();
	});

	it('should yield a userId after decoding the token ', function () {
		const req = {
			get: function () {
				return 'Bearer ajddear;lj';
			},
		};

		sinon.stub(jwt, 'verify');

		jwt.verify.returns({ userId: 'abc' });

		authMiddleware(req, {}, () => {});

		expect(req).to.have.property('userId');
		expect(req).to.have.property('userId', 'abc');
		expect(jwt.verify.called).to.be.true;

		jwt.verify.restore();
	});

	it('should throw an error if the token cannot be verified', function () {
		const req = {
			get: function () {
				return 'Bearer xyz';
			},
		};

		expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
	});
});
