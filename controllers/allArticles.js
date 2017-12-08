const Article = require('../models/article.js');

module.exports = (app) => {
    app.get("/api/all", (req, res) => {
        Article.find({ deleted: false }, (error, allArticles) => {
            if (error) console.log('Return error:', allArticles)
            res.json(allArticles);
        })
    })
}