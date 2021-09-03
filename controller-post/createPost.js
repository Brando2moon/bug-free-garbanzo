const express = require("express");
const bodyParser = require("body-parser");
const article = require("../model/article");
const userLogin = require("../model/userLogin");
const { check, validationResult } = require("express-validator");

module.exports = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log(errors);

		res.redirect("/create");
	} else if (req.headers.cookie == "") {
		let newContent = new article(req.body);
		let cookieBox = req.headers.cookie;
		let cookieSP = cookieBox.split("=");
		userid = cookieSP[2];
		let userNum = userid.split(";")[0];
		userLogin.findOne({ username: userNum }, (err, user) => {
			newContent.logininfos.push(user._id);
			newContent.save(function (err, document) {
				if (err) return console.error(err);
				// console.log("Content Created", newContent);
				let theID = user._id;

				console.log(newContent);
			});
		});
	} else {
		let newContent = new article(req.body);
		newContent.save(function (err, document) {
			if (err) return console.error(err);

			console.log(err);
		});
		res.redirect("/index");
	}
};
