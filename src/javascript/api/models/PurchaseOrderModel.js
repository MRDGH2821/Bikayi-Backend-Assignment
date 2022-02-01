"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PurchaseOrderSchema = new Schema({
	orderId: {
		type: String,
		default: mongoose.Types.ObjectId,
	},
	name: {
		type: String,
		required: "Enter Product name",
	},
	quantity: {
		type: Number,
		required: "Enter quantity",
	},
	pricing: {
		type: Number,
		required: "Enter price",
	},
	MRP: {
		type: Number,
		required: "Enter MRP",
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
module.exports = mongoose.model("Purchaseorder", PurchaseOrderSchema);
