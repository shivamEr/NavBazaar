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
 * @file authRouter.js
 * @description Routes for handling user authentication and authorization.
 * @module Routes/Auth
 */

/**
 * @route   GET /api/auth/profile
 * @desc    Get the authenticated user's profile
 * @access  Private
 */
authRouter.get('/profile', protectRoute, getProfile);

/**
 * @route   POST /api/auth/signup
 * @desc    Register a new user and send email verification
 * @access  Public
 */
authRouter.post('/signup', signup);

/**
 * @route   POST /api/auth/verify-email
 * @desc    Verify email using token sent to user
 * @access  Public
 */
authRouter.post('/verify-email', verifyEmail);

/**
 * @route   POST /api/auth/login
 * @desc    Login user and return auth token
 * @access  Public (Rate limited)
 */
authRouter.post('/login', loginLimiter, login);

/**
 * @route   POST /api/auth/logout
 * @desc    Logout the user and clear session/token
 * @access  Public
 */
authRouter.post('/logout', logout);

/**
 * @route   POST /api/auth/forgot-password
 * @desc    Send password reset email with token
 * @access  Public
 */
authRouter.post('/forgot-password', forgotPassword);

/**
 * @route   POST /api/auth/reset-password/:token
 * @desc    Reset user password using the provided token
 * @access  Public
 */
authRouter.post('/reset-password/:token', resetPassword);

module.exports = authRouter;
