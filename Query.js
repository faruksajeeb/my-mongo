// Create a new collection named "books"
db.createCollection("books");

//Removes a collection from the database.
db.books.drop();

//Inserts a single document into a collection.
db.books.insertOne({
	name: "After You",
	author: "Jojo Moyos",
	publisher: "Penguin",
	price: 500,
});

//Delete/remove a single document from the collection.
db.books.deleteOne({ name: "John Doe" });