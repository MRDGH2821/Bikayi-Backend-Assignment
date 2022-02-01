import * as express from "express";
import * as mongoose from "mongoose";
import { config } from "dotenv";
config();
import * as Customer from "./api/models/customerModel";

const uri = "mongodb://localhost/bikayi-backend";

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

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import * as customerRoutes from "./api/routes/customerRoutes"; //importing route
customerRoutes(app); //register the route

app.listen(port);

console.log(`Express started on: http://localhost:${port}`);
