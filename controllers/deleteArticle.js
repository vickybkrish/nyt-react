const Article = require("../models/article.js");

module.exports = (app) => {
    app.put("/api/delete", (req, res) => { 
        console.log(req.body);
        Article.update({ headline: req.body.headline }, { deleted: true }, (error, numbAffected, deletedArticle) => { 
            if (error) console.log('Save error:', error);
            console.log(numbAffected);
            Article.find({ deleted: false }, (error, allArticles) => { 
                if (error) console.log('Return error:', allArticles)
                res.json(allArticles);
            })
        })
    })
}