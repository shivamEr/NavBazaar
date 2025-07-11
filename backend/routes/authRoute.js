const express = require('express');
const authRouter = express.Router();

// Controllers
const {
    signup,
    verifyEmail,
    login,
    logout,
    checkAuth,
    forgotPassword,
    resetPassword
} = require('../controllers/authController');

// Middleware
const verifyToken = require('../middleware/verifyToken');

/**
 * @description Authentication Routes
 * All routes related to user authentication and authorization.
 */

// Check if user is authenticated
authRouter.get('/check-auth', verifyToken, checkAuth);

// Signup and Email Verification
authRouter.post('/signup', signup);
authRouter.post('/verify-email', verifyEmail);

// Login & Logout
authRouter.post('/login', login);
authRouter.post('/logout', logout);

// Password Reset Flow
authRouter.post('/forgot-password', forgotPassword);
authRouter.post('/reset-password/:token', resetPassword);

module.exports = authRouter;
