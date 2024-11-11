
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
	name: {
	  type: String,
	  required: true,
	},
	email: { // changed from emails to email
	  type: String,
	  required: true,
	//   unique: true,
	},
	password: {
	  type: String,
	  required: true,
	},
	
	phone: {
	  type: Number,
	},
	Admin: {
	  type: Boolean,
	  default: false,
	},
  },
	{ timestamps: true }
  );
  
  const userModel = mongoose.model("user", userSchema);
  module.exports = userModel;
  