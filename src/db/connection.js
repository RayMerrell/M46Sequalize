const {Sequelize} = require ("sequelize");

const connection = new Sequelize(process.env.mySQL-URL);

connection.authenticate();
console.log("DB Connection established");
module.exports = connection;
