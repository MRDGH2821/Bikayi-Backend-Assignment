export function customerRoutes(app) {
	const bookList = require("../controllers/bookListController");
	// bookList Routes
	app
		.route("/books")
		.get(bookList.list_all_customers)
		.post(bookList.create_customer);
	app
		.route("/books/:bookId")
		.get(bookList.read_customer)
		.put(bookList.update_customer)
		.delete(bookList.delete_customer);
}
