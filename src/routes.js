const express = require('express')
const routes = express.Router()
// Controllers
const UserControoler = require('./controllers/UserController')

routes.get('/users', UserControoler.index)
routes.post('/users', UserControoler.store)


module.exports = routes