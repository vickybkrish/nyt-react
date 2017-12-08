var mongoose = require("mongoose");
// var Comment = require("./comment.js");

var articleSchema = mongoose.Schema({
    headline: String,
    web_url: String,
    pub_date: String,
    deleted: Boolean
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;