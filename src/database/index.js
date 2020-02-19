const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

//Models
const User = require('../Models/User')


const connection = new Sequelize(dbConfig)

User.init(connection)


module.exports = connection