const express = require('express');
const router = express.Router();
const cartModel = require('../model/cartModel');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
require('../db/connection');

// Get cart for a specific user
router.get('/:userID', async (req, res) => {
    const { userID } = req.params;
    console.log('Fetching cart for userID:', userID);

    // Validate if userID is a valid ObjectId
    if (!ObjectId.isValid(userID)) {
        return res.status(400).json({ error: 'Invalid user ID format' });
    }

    try {
        const cart = await cartModel.findOne({ userID: new ObjectId(userID) }) // Convert to ObjectId here
            .populate('Product.productID')
            .populate('Product.productdetails');
        console.log('Fetched cart:', cart);

        res.json(cart);
    } catch (error) {
        console.error('Error fetching cart data:', error);
        res.status(500).json({ error: 'Failed to fetch cart data' });
    }
});
module.exports=router;