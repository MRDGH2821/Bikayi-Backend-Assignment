import { Request, Response } from "express";
import * as mongoose from "mongoose";
const Customer = mongoose.model("Customer");
export function list_all_customers(req: Request, res: Response) {
	Customer.find({}, (err, customer) => {
		if (err) res.send(err);
		res.json(customer);
	});
}
export function create_customer(req: Request, res: Response) {
	let new_customer = new Customer(req.body);
	new_customer.save((err, customer) => {
		if (err) res.send(err);
		res.json(customer);
	});
}
export function read_customer(req: Request, res: Response) {
	Customer.findById(req.params.customerId, (req, res) => {
		if (err) res.send(err);
		res.json(customer);
	});
}
export function update_customer(req: Request, res: Response) {
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

export function delete_customer(req: Request, res: Response) {
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
