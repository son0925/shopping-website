const express = require('express');
const mainRouter = express.Router();
const mainController = require('../controllers/main.controller')


mainRouter.get('/', mainController.getMainPage)



module.exports = mainRouter;