"use strict";
module.exports = (app) => {
	const shippingDetail = require("../controllers/shippingDetailController");
	// customer Routes
	app
		.route("/shipping")
		.get(shippingDetail.list_all_shipments)
		.post(shippingDetail.create_shipment);
	app
		.route("/shipping/:orderId")
		.get(shippingDetail.read_shipment)
		.put(shippingDetail.update_shipment)
		.delete(shippingDetail.cancel_shipment);
};
