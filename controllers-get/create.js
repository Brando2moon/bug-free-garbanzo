const userLogin = require("../model/userLogin");
const cookieParser = require("cookie-parser");
const { check, validationResult } = require("express-validator");

module.exports = (req, res) => {
	//valicheck//
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log(errors);
	} else if (req.headers.cookie == "") {
		res.render("create", { user });
	} else {
		let cookieBox = req.headers.cookie;
		let cookieSP = cookieBox.split("=");
		userid = cookieSP[2];
		let userNum = cookieSP[2].split(";");
		let userNum1 = userNum[0];
		error = { error: cookieSP[0] };
		console.log(userNum1);
		userLogin.findOne({ username: userNum1 }, (err, user) => {
			console.log(userNum);
			res.render("create", { user, errors });
		});
	}
};
