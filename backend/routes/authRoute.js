const express = require('express');
const authRouter = express.Router();

const {userInfo, signup, login} = require('../controllers/authController')

authRouter.get('/info', userInfo)

authRouter.post('/signup', signup);

authRouter.post('/login', login);

module.exports = authRouter;
