
const express = require('express');
const router=express.Router();
const productModel= require('../model/productModel'); // Assuming your Product model is set up
const app = express();

// Endpoint to search for products by name
router.get('/search', async (req, res) => { // Change `app` to `router`
  const query = req.query.query; // Get the search query from the request
  try {
    // Use regex for case-insensitive search on the product name
    const products = await productModel.find({
      name: { $regex: query, $options: 'i' }
    });
    res.json(products); // Send the matching products as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching products' });
  }
});
module.exports = router;
