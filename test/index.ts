import { suite } from "uvu";
import * as assert from "uvu/assert";
import unirest from "unirest";

const port = process.env.PORT || 3001;

// ---

const customer = suite("customer");

customer("Should Create a new customer", async () => {
	await unirest("POST", `http://localhost:${port}/customer`)
		.send("name=Customer 10")
		.send("email=customer10@sample.com")
		.send("phone=999999910")
		.send("city=Delhi")
		.end(function (res) {
			if (res.error) throw new Error(res.error);
			console.log("Response body: ", res.body);
			const data = res.body;
			assert.is(data.name, "Customer 10");
		});
});

customer.run();
