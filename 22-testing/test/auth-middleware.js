const expect = require('chai').expect;

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
});
