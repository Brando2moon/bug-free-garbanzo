const express = require("express");
const app = require("express")();
const path = require("path");
const port = 7000;
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
require("./config/routes")(app);
require("./config/express")(app);
const cookieParser = require("cookie-parser");
app.use(cookieParser());
mongoose
	.connect(
		`mongodb+srv://${process.env.dataName}:${process.env.DataBasePass}@cluster0.0a1tu.mongodb.net/wiki?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useFindAndModify: false,
		}
	)
	.then((res) => console.log("db connected"))
	.catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("we are conected yall");
});
// app.use(bodyParser.json());
// app.use(bodyParser.raw());
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
