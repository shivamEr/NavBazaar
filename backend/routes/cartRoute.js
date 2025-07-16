const express = require('express');
const { protectRoute } = require('../middleware/protectRoute');
const {
  addItemToCart,
  updateCartItemQuantity,
  removeItemFromCart,
  getUserCart,
  clearCart
} = require('../controllers/cartController');

const router = express.Router();

/**
 * @route   GET /api/cart
 * @desc    Get all items in the logged-in user's cart
 * @access  Private
 */
router.get('/', protectRoute, getUserCart);

/**
 * @route   POST /api/cart
 * @desc    Add an item to the cart
 * @body    { productId, quantity }
 * @access  Private
 */
router.post('/', protectRoute, addItemToCart);

/**
 * @route   PUT /api/cart/:productId
 * @desc    Update quantity of a specific product in the cart
 * @access  Private
 */
router.put('/:productId', protectRoute, updateCartItemQuantity);

/**
 * @route   DELETE /api/cart/:productId
 * @desc    Remove a specific product from the cart
 * @access  Private
 */
router.delete('/:productId', protectRoute, removeItemFromCart);

/**
 * @route   DELETE /api/cart
 * @desc    Clear the entire cart
 * @access  Private
 */
router.delete('/', protectRoute, clearCart);

module.exports = router;
