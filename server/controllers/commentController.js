const {Comment} = require('../models/models');
const ApiError = require('../error/ApiError');

class CommentController {
    async create(req, res) {
        const {text, date, time, parent_id, likes, dislikes, user_id, publication_id} = req.body;
        const comment = await Comment.create({text, date, time, parent_id, likes, dislikes, user_id, publication_id});
        return res.json(comment)
    }

    async getAll(req, res) {
        const comments = await Comment.findAll();
        return res.json(comments)
    }

}

module.exports = new CommentController();