const { validationResult } = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
	res.status(200).json({
		posts: [
			{
				_id: '1',
				title: 'First Post',
				content: 'This is the first post',
				imageUrl: 'images/book.jpg',
				creator: {
					name: 'Gary',
				},
				createdAt: new Date(),
			},
		],
	});
};

exports.postPost = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const error = new Error('Validation failed, entered data is incorrect');
		error.statusCode = 422;

		throw error;
	}

	const title = req.body.title;
	const content = req.body.content;

	const post = new Post({
		title: title,
		content: content,
		imageUrl: 'images/book.jpg',
		creator: { name: 'Gary' },
	});

	post
		.save()
		.then((result) => {
			res.status(201).json({
				message: 'Post created succesfully',
				post: result,
			});
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}

			next(err);
		});
};
