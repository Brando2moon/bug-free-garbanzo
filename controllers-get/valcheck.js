const { check, validationResult } = require("express-validator");
const express = require("express");
const bodyParser = require("body-parser");

module.exports = [
	check("username").isLength({ min: 5, max: 10 }),
	check("password")
		.isLength({ min: 6, max: 12 })
		.equals("repeatpassword")
		.isAlphanumeric(),
	check("content", "Need to be 20 characters long").isLength({ min: 20 }),
];
