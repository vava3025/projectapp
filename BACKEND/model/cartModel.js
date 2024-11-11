const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  productID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
  productdetails: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
