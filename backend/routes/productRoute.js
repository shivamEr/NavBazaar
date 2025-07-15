const express = require('express');
const {
  getAllProducts,
  getProductById,
  getFeaturedProducts,
  getProductsByCategory,
  createProduct,
  deleteProduct,
  updateProduct,
  toggleFeaturedProduct
} = require('../controllers/productController');

const { protectRoute, adminRoute } = require('../middleware/protectRoute');

const router = express.Router();

/**
 * @route   GET /api/products/
 * @desc    Get all products
 * @access  Public
 */
router.get('/', getAllProducts);

/**
 * @route   GET /api/products/:id
 * @desc    Get product by Id
 * @access  Public
 */
router.get('/:id', getProductById);

/**
 * @route   GET /api/products/featured
 * @desc    Get all featured products (homepage highlight)
 * @access  Public
 */
router.get('/featured', getFeaturedProducts);

/**
 * @route   GET /api/products/category/:category
 * @desc    Get products by category (e.g., electronics, clothing)
 * @access  Public
 */
router.get('/category/:category', getProductsByCategory);

/**
 * @route   POST /api/products/
 * @desc    Create a new product (only by admin)
 * @access  Protected (Admin only)
 */
router.post('/', protectRoute, adminRoute, createProduct);

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product by ID (hard delete)
 * @access  Protected (Admin only)
 */
router.delete('/:id', protectRoute, adminRoute, deleteProduct);

/**
 * @route   PUT /api/products/:id
 * @desc    Update an existing product fully
 * @access  Protected (Admin only)
 */
router.put('/:id', protectRoute, adminRoute, updateProduct);

/**
 * @route   PATCH /api/products/:id/featured
 * @desc    Toggle the 'featured' flag of a product
 * @access  Protected (Admin only)
 */
router.patch('/:id/featured', protectRoute, adminRoute, toggleFeaturedProduct);

module.exports = router;
