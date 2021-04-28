const { Comment } = require('../models/models');
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
    
    async update(req, res) {
        const id = req.params.id;
        const {text, date, time, parent_id, likes, dislikes, user_id, publication_id} = req.body;
        let comment = await Comment.findByPk(id);

        comment.text = text;
        comment.date = date;
        comment.time = time;
        comment.parent_id = parent_id;
        comment.likes = likes;
        comment.dislikes = dislikes;
        comment.user_id = user_id;
        comment.publication_id = publication_id;

        const new_comment = await Comment.save();
        return res.json(new_comment)
    }

    async getOne(req, res) {
        const id = req.params.id;
        const comment = await Comment.findByPk(id);
        return res.json(comment)
    }

    async delete(req, res) {
        const id = req.params.id;
        const result = await Comment.destroy({where: {id: id}});
        return res.json(result)
    }

}

module.exports = new CommentController();