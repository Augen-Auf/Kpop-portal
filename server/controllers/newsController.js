const {News} = require('../models/models');
const ApiError = require('../error/ApiError');

class NewsController {
    async create(req, res) {
        const {title, lid, text, type, views, author_id} = req.body;
        const news = await News.create({title, lid, text, type, views, author_id});
        return res.json(news)
    }

    async update(req, res) {
        const id = req.params.id;
        const {title, lid, text, type, views, author_id} = req.body;
        let News = await News.findByPk(id)
        News.title = title
        News.lid = lid
        News.text = text
        News.type = type
        News.views = views
        News.author_id = author_id

        const new_news = await News.save()
        return res.json(new_news)
    }

    async getOne(res, req) {
        const id = req.params.id
        const news = await News.findByPk(id);
        return res.json(news)
    }

    async getAll(req, res) {
        const news = await News.findAll();
        return res.json(news)
    }

    async delete(req, res) {
        const id = req.params.id
        const result = await News.destroy({where: {id: id}})
        return res.json(result)
    }

}

module.exports = new NewsController();