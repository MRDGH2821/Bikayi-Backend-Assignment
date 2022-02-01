"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
	customerId: {
		type: String,
		default: mongoose.Types.ObjectId,
	},
	name: {
		type: String,
		required: "Enter Customer name",
	},
	email: {
		type: String,
		required: "Enter email",
	},
	phone: {
		type: Number,
		required: "Enter phone number",
	},
	city: {
		type: String,
		required: "Enter City",
	},
	Created_date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Customer", CustomerSchema);
