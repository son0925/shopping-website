const express = require('express')
const signRouter = express.Router();
const signController = require('../controllers/sign.controller')


// Get SignIn Page
signRouter.get('/in', signController.getSigninPage)

// Post SignIn Page
signRouter.post('/in/callback', signController.getAccessToken)

signRouter.get('/up', signController.getSignupPage)


module.exports = signRouter;