const Product = require('../models/productSchema');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      message: "Products successfully fetched",
      products
    });
  } catch (error) {
    console.log("Error in getAllProducts controller", error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Fetch a single product by id
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Products successfully fetched",
      product
    });
  } catch (error) {
    console.log("Error in getProductById controller", error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


// @desc    Fetch featured products
// @route   GET /api/products/featured
// @access  Public
const getFeaturedProducts = async (req, res) => {
  try {
    const featuredProducts = await Product.find({ isFeatured: true });

    res.status(200).json({
      success: true,
      message: "Featured products fetched",
      products: featuredProducts
    });
  } catch (error) {
    console.log("Error in getFeaturedProducts controller", error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Fetch products by category
// @route   GET /api/products/category/:category
// @access  Public
const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });

    res.status(200).json({
      success: true,
      message: `Products fetched for category: ${category}`,
      products
    });
  } catch (error) {
    console.log("Error in getProductsByCategory controller", error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Private (Admin)
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: "Product created",
      product
    });
  } catch (error) {
    console.log("Error in createProduct controller", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Delete a product by ID
// @route   DELETE /api/products/:id
// @access  Private (Admin)
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ success: true, message: 'Product deleted' });
  } catch (error) {
    console.log("Error in deleteProduct controller", error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Update product completely
// @route   PUT /api/products/:id
// @access  Private (Admin)
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated',
      product
    });
  } catch (error) {
    console.log("Error in updateProduct controller", error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Toggle featured flag of product
// @route   PATCH /api/products/:id/featured
// @access  Private (Admin)
const toggleFeaturedProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.isFeatured = !product.isFeatured;
    await product.save();

    res.status(200).json({
      success: true,
      message: `Product featured status set to ${product.isFeatured}`,
      product
    });
  } catch (error) {
    console.log("Error in toggleFeaturedProduct controller", error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getFeaturedProducts,
  getProductsByCategory,
  createProduct,
  deleteProduct,
  updateProduct,
  toggleFeaturedProduct
};
