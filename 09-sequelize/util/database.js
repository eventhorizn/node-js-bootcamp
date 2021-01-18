const Sequelize = require('sequelize');

const sequelize = new Sequelize.Sequelize('node-shop', 'root', 'Fer13bax#', {
	dialect: 'mysql',
	host: 'localhost',
	port: 3307,
});

module.exports = sequelize;
