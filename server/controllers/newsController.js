const { News, Reaction, Comment, Image, Tag } = require('../models/models');
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
        let news = await News.findByPk(id);
        news.title = title;
        news.lid = lid;
        news.text = text;
        news.type = type;
        news.views = views;
        news.author_id = author_id;

        const new_news = await News.save();
        return res.json(new_news)
    }

    async getOne(req, res) {
        const id = req.params.id;
        const news = await News.findByPk(id);
        return res.json(news)
    }

    async getAll(req, res) {
        const news = await News.findAll();
        return res.json(news)
    }

    async delete(req, res) {
        const id = req.params.id;
        const result = await News.destroy({where: {id: id}});
        return res.json(result)
    }

    async getAllPublicationReactions(req, res) {
        const id = req.params.id;
        const reactions = await Reaction.findAll({include: Reaction, where: {publication_id: id}});
        return res.json(reactions)
    }

    async getAllPublicationComments(req, res) {
        const id = req.params.id;
        const comments = await Comment.findAll({include: Comment, where: {publication_id: id}});
        return res.json(comments)
    }

    async getAllPublicationImages(req, res) {
        const id = req.params.id;
        const images = await Image.findAll({include: Image, where: {publication_id: id}});
        return res.json(images)
    }

    async getAllPublicationTags(req, res) {
        const id = req.params.id;
        const tags = await Tag.findAll({include: Tag, where: {publication_id: id}});
        return res.json(tags)
    }

}

module.exports = new NewsController();