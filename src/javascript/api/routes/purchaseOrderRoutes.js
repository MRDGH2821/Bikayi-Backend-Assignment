"use strict";
module.exports = (app) => {
	const purchase = require("../controllers/purchaseOrderController");
	// customer Routes
	app
		.route("/purchase")
		.get(purchase.list_all_order)
		.post(purchase.create_purchase);
	app
		.route("/purchase/:orderId")
		.get(purchase.read_purchase)
		.put(purchase.update_purchase)
		.delete(purchase.cancel_purchase);
};
