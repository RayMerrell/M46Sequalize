const { Sequelize } = require("sequelize");

const {DataTypes} = require (Sequelize);
const connection = require("../db/connection");

const Book = connection.define("Book", {
    title:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    author:{
        type:DataTypes.STRING,
    },
    genre:{
        type:DataTypes.STRING,
    },

});



module.exports = Book;