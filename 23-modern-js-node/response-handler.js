//const fs = require('fs').promises; // way to do this node import
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// using es6 imports makes us have to do this to access node globals
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resHandler = (req, res, next) => {
	// using readFile w/ promises
	fs.readFile('my-page.html', 'utf8')
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err);
		});
	// using a different function to highlight node global issue
	//res.sendFile(path.join(__dirname, 'my-page.html'));
};

export default resHandler;
