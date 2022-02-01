import * as mongoose from "mongoose";
const Customer = mongoose.model("Customer");
export function list_all_customers(req, res) {
	Customer.find({}, (err, customer) => {
		if (err) res.send(err);
		res.json(customer);
	});
}
export function create_customer(req, res) {
	let new_customer = new Customer(req.body);
	new_customer.save((err, customer) => {
		if (err) res.send(err);
		res.json(customer);
	});
}
export function read_customer(req, res) {
	Customer.findById(req.params.customerId, (err, customer) => {
		if (err) res.send(err);
		res.json(customer);
	});
}
export function update_customer(req, res) {
	Customer.findOneAndUpdate(
		{ _id: req.params.bookId },
		req.body,
		{ new: true },
		(err, task) => {
			if (err) res.send(err);
			res.json(Customer);
		}
	);
}

export function delete_customer(req, res) {
	Customer.remove(
		{
			_id: req.params.bookId,
		},
		(err, customer) => {
			if (err) res.send(err);
			res.json({ message: "Customer successfully deleted" });
		}
	);
}
