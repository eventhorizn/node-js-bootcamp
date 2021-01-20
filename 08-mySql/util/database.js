const mysql = require('mysql2');
const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'node-shop',
	password: 'Fer13bax#',
	port: 3307,
});

module.exports = pool.promise();
