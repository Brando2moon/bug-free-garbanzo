module.exports = (req, res) => {
	res.clearCookie("loggedIn");
	res.clearCookie("username");
	res.clearCookie("userIDcook");
	res.redirect("/");
};
