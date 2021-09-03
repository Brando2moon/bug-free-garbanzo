const article = require("../model/article");

module.exports = (req, res) => {
	article.find(function (err, contents) {
		if (err) {
			console.log(err);
		}
		res.render("all-articles", { contents });
	});
};
