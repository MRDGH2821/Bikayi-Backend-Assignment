import * as mongoose from "mongoose";
import { nanoid } from "nanoid";
console.log(nanoid(15));
const Schema = mongoose.Schema;

const ShippingSchema = new Schema({
	address: {
		type: String,
		required: "Enter Address",
	},
	city: {
		type: String,
		required: "Enter city",
	},
	pincode: {
		type: Number,
		required: "Enter Pincode",
	},
	orderId: {
		type: String,
		required: "Enter Order ID",
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

export default mongoose.model("Shipping-Details", ShippingSchema);
