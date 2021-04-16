const {News} = require('../models/models');
const ApiError = require('../error/ApiError');

class NewsController {
    async create(req, res) {
        const {title, lid, text, type, views, author_id} = req.body;
        const news = await News.create({title, lid, text, type, views, author_id});
        return res.json(news)
    }

    async getAll(req, res) {
        const news = await News.findAll();
        return res.json(news)
    }

}

module.exports = new NewsController();