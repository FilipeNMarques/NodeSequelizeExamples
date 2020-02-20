const express = require('express')
const routes = express.Router()
// Controllers
const UserControoler = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

// Users
routes.get('/users', UserControoler.index)
routes.post('/users', UserControoler.store)

// Address 
/*Todo address precisa de um user, então para deixar isso bem amarrado,
 é legal fazer o encadeamento das rotas */

routes.get('/users/:user_id/address', AddressController.index)
routes.post('/users/:user_id/address', AddressController.store)

routes.get('/users/:user_id/techs', TechController.index)
routes.post('/users/:user_id/techs', TechController.store)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/reports', ReportController.show)


module.exports = routes