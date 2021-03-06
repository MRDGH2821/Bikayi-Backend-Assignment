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
	Customer.findById(req.params.customerId, (err, customer) => {
		if (err) {
			res.send(err);
		} else {
			res.json(customer);
		}
	});
};
exports.update_customer = (req, res) => {
	Customer.findOneAndUpdate(
		{ customerId: req.params.customerId },
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
			customerId: req.params.customerId,
		},
		(err, customer) => {
			if (err) res.send(err);
			res.json({ message: "Customer successfully deleted" });
		}
	);
};

exports.customer_orders = (req, res) => {
	Customer.aggregate([
		{
			$lookup: {
				from: "purchaseorders",
				localField: "customerId",
				foreignField: "customerId",
				as: "purchaseOrder",
			},
		},
	]).exec((err, result) => {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
	/*
		.then((result) => res.send(result))
		.catch((err) => {
			res.send(err);
			console.log(err);
		});
		*/
};

exports.customer_shipment_filter = (req, res) => {
	const agg = [
		{
			$lookup: {
				from: "shippingdetails",
				localField: "customerId",
				foreignField: "customerId",
				as: "shippingdetails",
			},
		},
		{
			$project: {
				_id: 0,
				Created_date: 0,
				__v: 0,
				shippingdetails: {
					_id: 0,
					customerId: 0,
					Created_date: 0,
					__v: 0,
				},
			},
		},
	];
	Customer.aggregate(agg).exec((err, result) => {
		if (err) {
			res.send(err);
		} else {
			const city = req.params.city;
			console.log(result);
			res.send(result);
		}
	});
};
