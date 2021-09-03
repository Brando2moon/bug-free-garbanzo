const article = require("../model/article");

module.exports = (req, res) => {
	// res.clearCookie("loggedIn");
	// res.clearCookie("username");
	// res.clearCookie("userIDcook");

	article.findById(req.params.id, (err, contents) => {
		if (err) {
			console.log(err);
		}
		// console.log(contents);
		res.render("article", { contents });
	});
};
