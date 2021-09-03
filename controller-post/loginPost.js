const express = require("express");
const bodyParser = require("body-parser");
const article = require("../model/article");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userLogin = require("../model/userLogin");
const { check, validationResult } = require("express-validator");

module.exports = (req, res) => {
	const un = req.body.username;
	const pw = req.body.password;
	//valicheck//
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log(errors);
	}

	userLogin.findOne({ username: un }, function (err, user) {
		if (!user) {
			console.log(err);
			res.redirect("/");
		} else {
			const userId = user._id;
			const hashedPw = user.password;
			const userName = user.username;

			bcrypt.compare(pw, hashedPw, (err, userdata) => {
				if (userdata === true) {
					console.log("User Login");
					const payload = { userId, userName };
					const secret = process.env.SecretKey;
					const options = { expiresIn: "15m" };

					const token = jwt.sign(payload, secret, options);

					// set token as a cookie//
					res.cookie("token", token, {
						httpOnly: true,
						maxAge: 120000,
					});
					res.cookie("loggedIn", true);
					res.cookie("username", userName);
					console.log("cookie is set");
					// res.cookie("username", "userName");
					res.cookie("userIDcook", userId);
					res.redirect("/index");
				} else {
					res.redirect("/");
				}
			});
		}
	});

	//
};
// if (userdata == true) {
// 			console.log("we are in");

// 			//part of the jwt token//
// 			const payload = { userID, username };
// 			const secret = process.env.SecretKey;
// 			const options = { expiresIn: "15m" };

// 			const token = jwt.sign(payload, secret, options);
// 			// console.log(token);

// 			// set token as a cookie//
// 			res.cookie("token", token, {
// 				httpOnly: true,
// 				maxAge: 300000,
// 			});
// 			res.cookie("loggedIn", true);
// 			res.cookie("username", un);
// 			res.cookie("userIDcook", userID);

// 			// const decodedToken = jwt.verify(token, secret);

// 			// console.log("I am decodedToken", decodedToken);
// 			// console.log("DECODED ====> ", decodedToken);
// 			res.redirect(302, "/");
// 		} else {
