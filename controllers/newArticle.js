const Article = require("../models/article.js");

module.exports = (app) => {
    app.post("/api/new", (req, res) => { 
        const article = req.body;
        article.deleted = false;
        const newArticle = new Article(article);
        console.log(req.body);
        console.log("new Article", newArticle);
        newArticle.save((error, savedArticle) => { 
            if (error) console.log('Save error:', error);
            Article.find({ deleted: false }, (error, allArticles) => { 
                if (error) console.log('Return error:', allArticles);
                console.log(allArticles);
                res.json(allArticles);
            })
        })
    })
}