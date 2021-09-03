const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userLoginSchema = new schema({
	username: String,
	password: String,
});

const loginInfos = mongoose.model("loginInfos", userLoginSchema);

module.exports = loginInfos;
