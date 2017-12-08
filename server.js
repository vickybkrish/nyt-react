// Dependencies
const bodyParser = require("body-parser");
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const controllers = require("./controller");

mongoose.Promise = Promise; // What is this for? I'm not using promises with Mongoose, am I?

// Initialize Express
const app = express();

// Use body-parser in our app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));
// app.use(methodOverride("_method"));

// Database configuration
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect("mongodb://localhost/nyt")
}
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Initialize all controllers passing the server app as an argument
controllers(app);

// Listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("App running on http://localhost:3000");
});