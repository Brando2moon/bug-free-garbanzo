const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

module.exports = (app) => {
	app.set("view engine", "hbs");
	app.engine(
		"hbs",
		exphbs({
			extname: "hbs",
			defaultLayout: "",
			layoutsDir: __dirname + "/views",
		})
	);
	app.use(bodyParser.urlencoded({ extended: true }));
	// app.use(bodyParser.json());
	app.use(express.static("public"));

	// app.use(cookieParser());
};
