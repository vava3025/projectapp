const express=require('express');
const router=express.Router();
const productModel=require('../model/productModel')
require('../db/connection')




// Get products by category (e.g., Women, Men, Kids)
router.get('/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    // Fetch products by category
    const products = await productModel.find({ category: category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// You can also add a general route to fetch all products if needed
router.get('/all', async (req, res) => {
  try {
    const products = await productModel.find();  // Fetch all products
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

