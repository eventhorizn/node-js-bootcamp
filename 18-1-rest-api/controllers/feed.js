const { validationResult } = require('express-validator');
const post = require('../models/post');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
	Post.find()
		.then((posts) => {
			res
				.status(200)
				.json({ message: 'Fetched posts successfully', posts: posts });
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}

			next();
		});
};

exports.postPost = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const error = new Error('Validation failed, entered data is incorrect');
		error.statusCode = 422;

		throw error;
	}

	if (!req.file) {
		const error = new Error('No image provided');
		error.statusCode = 422;

		throw error;
	}

	const title = req.body.title;
	const content = req.body.content;
	const imageUrl = req.file.path.replace('\\', '/');

	const post = new Post({
		title: title,
		content: content,
		imageUrl: imageUrl,
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

exports.getPost = (req, res, next) => {
	const postId = req.params.postId;

	Post.findById(postId)
		.then((post) => {
			if (!post) {
				const error = new Error('Could not find post.');
				error.statusCode = 404;
				throw error; //throws to catch
			}

			res.status(200).json({ message: 'Post fetched', post: post });
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}

			next();
		});
};

//update post
//imageUrl = req.file.path.replace("\\","/");
