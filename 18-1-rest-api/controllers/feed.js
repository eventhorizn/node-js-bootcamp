const { validationResult } = require('express-validator');

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
		return res
			.status(422)
			.json({
				message: 'Validation failed, entered data is incorrect',
				errors: errors.array(),
			});
	}

	const title = req.body.title;
	const content = req.body.content;

	//create in db
	res.status(201).json({
		message: 'Post created succesfully',
		post: {
			_id: Date.now(),
			title: title,
			content: content,
			creator: { name: 'Gary' },
			createdAt: new Date(),
		},
	});
};
