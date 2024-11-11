const express=require('express');
const router=express.Router();
const orderModel=require('../model/orderModel')
require('../db/connection')

// Create a new order
router.post('/:userId', async (req, res) => {
    try {
      const newOrder = new orderModel({
        userId: req.params.userId,
        products: req.body.products,
        amount: req.body.amount,
        address: req.body.address
      });
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Get all orders of a user
  router.get('/:userId', async (req, res) => {
    try {
      const orders = await orderModel.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;