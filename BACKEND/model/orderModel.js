const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const OrderSchema =mongoose.Schema({
	userID: {
		type: ObjectId,
		ref: 'User',
		required: true,
	},
	products: [
		{
			productID: {
				type: ObjectId,
				ref: 'Product',
				required: true,
			},
            productdetails:{
                type: ObjectId,
                ref: 'product',
                required: true,
            },
			quantity: { 
				type: Number, 
				default: 1,
			},
		},
	],
	amount: {
		type: Number,
		required: true,
	},
	address: { 
		type: Object, 
		required: true,
	},
	status: {
		type: String,
		default: "pending",
	},
}, 
	{timestamps: true}
)

const orderData= mongoose.model("Order", OrderSchema)
module.exports=orderData;
