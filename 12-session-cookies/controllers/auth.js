const user = require('../models/user');

exports.getLogin = (req, res, next) => {
	// Cookie
	//const isLoggedIn = req.get('Cookie').split(';')[1].trim().split('=')[1];

	res.render('auth/login', {
		path: '/login',
		pageTitle: 'Login',
		isAuthenticated: false,
	});
};

exports.postLogin = (req, res, next) => {
	// Cookie
	//res.setHeader('Set-Cookie', 'loggedIn=true;');
	user.findById('600992644f64bc579cb5bbcd').then((user) => {
		req.session.isLoggedIn = true;
		req.session.user = user;
		res.redirect('/');
	});
};

exports.postLogout = (req, res, next) => {
	req.session.destroy(() => {
		res.redirect('/');
	});
};
