const express = require("express");
const bodyParser = require("body-parser");
const route = require("../config/routes");
const loginInfos = require("../model/userLogin");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const saltRounds = 9;

module.exports = (req, res) => {
	bcrypt.genSalt(saltRounds, (err, salt) => {
		bcrypt.hash(req.body.password, salt, (err, hash) => {
			const newestUser = new loginInfos({
				username: req.body.username,
				password: hash,
			});
			console.log(newestUser);
			console.log(hash);
			newestUser.save(function (err, document) {
				if (err) return console.error(err);
				console.log("Created User");
			});
		});
	});
	res.redirect("/");
};
