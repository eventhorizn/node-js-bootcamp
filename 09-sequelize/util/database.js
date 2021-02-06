const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize.Sequelize(
	process.env.DB_DB,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		dialect: 'mysql',
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
	}
);

module.exports = sequelize;
