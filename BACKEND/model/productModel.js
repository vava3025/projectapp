const mongoose = require('mongoose')
const ProductSchema =mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	price: { 
		type: Number,
		required: true,
	},
	Stock: {
		type: Boolean,
		default: true,
	},
	category: { type: String, enum: ['Women', 'Men', 'Kids'], required: true },
	size: { type: Array },
	color: { type: Array },
}, 
	{timestamps: true}
)

const productModel = mongoose.model("Product", ProductSchema)
module.exports= productModel;