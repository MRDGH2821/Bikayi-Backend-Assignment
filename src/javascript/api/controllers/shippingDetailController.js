"use strict";
const mongoose = require("mongoose");
const ShippingDetail = mongoose.model("ShippingDetail");

exports.list_all_shipments = (req, res) => {
	ShippingDetail.find({}, (err, detail) => {
		if (err) res.send(err);
		res.json(detail);
	});
};
exports.create_shipment = (req, res) => {
	let new_shipment = new ShippingDetail(req.body);
	new_shipment.save((err, detail) => {
		if (err) res.send(err);
		res.json(detail);
	});
};
exports.read_shipment = (req, res) => {
	ShippingDetail.findById(req.params.orderId, (err, detail) => {
		if (err) res.send(err);
		res.json(detail);
	});
};
exports.update_shipment = (req, res) => {
	ShippingDetail.findOneAndUpdate(
		{ orderId: req.params.orderId },
		req.body,
		{ new: true },
		(err, detail) => {
			if (err) res.send(err);
			res.json(detail);
		}
	);
};
exports.cancel_shipment = (req, res) => {
	ShippingDetail.remove(
		{
			orderId: req.params.orderId,
		},
		(err, order) => {
			if (err) res.send(err);
			res.json({ message: "Shipment cancelled." });
		}
	);
};
