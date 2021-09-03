const article = require("../model/article");

module.exports = (req, res) => {
	let MyHeroEdit = req.body;
	article.findByIdAndUpdate(req.params.id, MyHeroEdit, (err, contents) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Update", contents);
			res.redirect("/index");
		}
	});
};
