import * as mongoose from "mongoose";
import { nanoid } from "nanoid";
console.log(nanoid(15));
const Schema = mongoose.Schema;

const PurchaseOrderSchema = new Schema({
	orderId: {
		type: String,
		default: nanoid(15),
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
		required: "Enter pricing",
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

export default mongoose.model("Purchase-Order", PurchaseOrderSchema);
