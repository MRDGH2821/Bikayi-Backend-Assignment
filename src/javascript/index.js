const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const uri = "mongodb://localhost/bikayi-backend";
const Customer = require("./api/models/customerModel");
const PurchaseOrder = require("./api/models/PurchaseOrderModel");
const ShippingDetail = require("./api/models/shippingDetailModel");

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((res) => {
		console.log("DB Connected!");
	})
	.catch((err) => {
		console.log(Error, err.message);
	});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const customerRoutes = require("./api/routes/customerRoutes");
const purchaseOrderRoutes = require("./api/routes/purchaseOrderRoutes");
const shippingDetailRoutes = require("./api/routes/shippingDetailRoutes");
customerRoutes(app);
purchaseOrderRoutes(app);
shippingDetailRoutes(app);

app.get("*", (req, res) => {
	res.status(404).send({ url: req.originalUrl + "not found" });
});

app.listen(port);
console.log("API server started on: http://localhost:" + port);
