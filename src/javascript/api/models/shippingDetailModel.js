"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ShippingDetailSchema = new Schema({
	address: {
		type: String,
		required: "Enter Address",
	},
	city: {
		type: String,
		required: "Enter City",
	},
	pincode: {
		type: Number,
		required: "Enter pincode",
	},
	orderId: {
		type: String,
		required: "Enter Purchase Order ID",
	},
	customerId: {
		type: String,
		required: "Enter Customer ID",
	},
	Created_date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("ShippingDetail", ShippingDetailSchema);
