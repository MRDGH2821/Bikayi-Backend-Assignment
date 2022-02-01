"use strict";
const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");

exports.list_all_customer = (req, res) => {
	Customer.find({}, (err, book) => {
		if (err) res.send(err);
		res.json(book);
	});
};
exports.create_customer = (req, res) => {
	let new_customer = new Customer(req.body);
	new_customer.save((err, customer) => {
		if (err) res.send(err);
		res.json(customer);
	});
};
exports.read_customer = (req, res) => {
	Customer.findById(req.params.bookId, (err, customer) => {
		if (err) res.send(err);
		res.json(customer);
	});
};
exports.update_customer = (req, res) => {
	Customer.findOneAndUpdate(
		{ _id: req.params.customerId },
		req.body,
		{ new: true },
		(err, customer) => {
			if (err) res.send(err);
			res.json(customer);
		}
	);
};
exports.delete_customer = (req, res) => {
	Customer.remove(
		{
			_id: req.params.customerId,
		},
		(err, customer) => {
			if (err) res.send(err);
			res.json({ message: "Customer successfully deleted" });
		}
	);
};
