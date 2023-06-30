const express = require('express');
const controller = require('.recursos/controller');
const routes = express.Router();

routes.get('/',controller.raiz);
routes.get('/rota01',controller.rota01);
routes.get('/rota02',controller.rota02);
routes.get('/rota03',controller.rota03);

module.exports = routes
