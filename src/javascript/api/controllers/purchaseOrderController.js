"use strict";
const mongoose = require("mongoose");
const PurchaseOrder = mongoose.model("PurchaseOrder");

exports.list_all_order = (req, res) => {
	PurchaseOrder.find({}, (err, order) => {
		if (err) res.send(err);
		res.json(order);
	});
};
exports.create_purchase = (req, res) => {
	let new_purchase = new PurchaseOrder(req.body);
	new_purchase.save((err, purchase) => {
		if (err) res.send(err);
		res.json(purchase);
	});
};
exports.read_purchase = (req, res) => {
	PurchaseOrder.findById(req.params.orderId, (err, order) => {
		if (err) res.send(err);
		res.json(order);
	});
};
exports.update_purchase = (req, res) => {
	PurchaseOrder.findOneAndUpdate(
		{ orderId: req.params.orderId },
		req.body,
		{ new: true },
		(err, order) => {
			if (err) res.send(err);
			res.json(order);
		}
	);
};
exports.cancel_purchase = (req, res) => {
	PurchaseOrder.remove(
		{
			orderId: req.params.orderId,
		},
		(err, order) => {
			if (err) res.send(err);
			res.json({ message: "Purchase successfully cancelled." });
		}
	);
};
