const mongoose = require("mongoose");

const schema = mongoose.Schema;

const wikiSchema = new schema({
	title: String,
	content: String,
	logininfos: [
		{ type: schema.Types.ObjectId, required: true, ref: "logininfos" },
	],
});

const contentWiki = mongoose.model("wiki", wikiSchema);

module.exports = contentWiki;
