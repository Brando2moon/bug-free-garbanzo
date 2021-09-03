const article = require("../model/article");

module.exports = (req, res) => {
	article.findById(req.params.id, (err, contents) => {
		if (err) {
			console.log(err);
		}
		res.render("delete", { contents });
	});
};
