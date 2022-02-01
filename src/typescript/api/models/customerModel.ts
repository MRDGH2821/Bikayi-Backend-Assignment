import * as mongoose from "mongoose";
import { nanoid } from "nanoid";
console.log(nanoid(15));
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
	customerId: {
		type: String,
		default: nanoid(15),
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

export default mongoose.model("Customer", CustomerSchema);
