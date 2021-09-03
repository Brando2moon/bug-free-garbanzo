const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const token = req.cookies.token;
	console.log(req.cookies);
	try {
		const user = jwt.verify(token, process.env.SecretKey);
		req.user = user;
		console.log(req.user);
		next();
	} catch (err) {
		res.clearCookie("token");
		return res.redirect("/");
	}
};
