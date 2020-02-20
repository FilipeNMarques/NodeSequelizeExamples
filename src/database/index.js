const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

// Models
const User = require('../Models/User')
const Address = require('../Models/Address')
const Tech = require('../Models/Tech')


const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)
Tech.init(connection)

// Chamando o method associate 
User.associate(connection.models)
Address.associate(connection.models)
Tech.associate(connection.models)



module.exports = connection