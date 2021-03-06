"use strict";
module.exports = (app) => {
	const customer = require("../controllers/CustomerController");
	// customer Routes
	app
		.route("/customer")
		.get(customer.list_all_customer)
		.post(customer.create_customer);
	app
		.route("/customer/:customerId")
		.get(customer.read_customer)
		.put(customer.update_customer)
		.delete(customer.delete_customer);
	app.route("/customer/orders").get(customer.customer_orders);
	app.route("/customers/shipment/:city").get(customer.customer_shipment_filter);
};
