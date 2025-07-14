const express = require('express');
const authRouter = express.Router();

// Controllers
const {
    signup,
    verifyEmail,
    login,
    logout,
    getProfile,
    forgotPassword,
    resetPassword
} = require('../controllers/authController');

// Middleware
const { protectRoute } = require('../middleware/protectRoute');
const loginLimiter = require('../rate_limiter/rateLimitor');

/**
 * @description Authentication Routes
 * All routes related to user authentication and authorization.
 */

// get user profile with secure token
authRouter.get('/profile', protectRoute, getProfile);

// Signup and Email Verification
authRouter.post('/signup', signup);
authRouter.post('/verify-email', verifyEmail);

// Login & Logout
authRouter.post('/login', loginLimiter, login);
authRouter.post('/logout', logout);

// Password Reset Flow
authRouter.post('/forgot-password', forgotPassword);
authRouter.post('/reset-password/:token', resetPassword);

module.exports = authRouter;
