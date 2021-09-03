const article = require("../model/article");

module.exports = (req, res) => {
	article.findByIdAndDelete(req.params.id, (err, contents) => {
		if (err) {
			console.log(err);
		} else {
			console.log("deleted", contents);
			res.redirect("/index");
		}
	});
};
