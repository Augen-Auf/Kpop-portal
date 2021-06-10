const { Comment, CommentRating } = require('../models/models');
const ApiError = require('../error/ApiError');

class CommentController {
    async create(req, res) {
        const {text, parentId, user_id, publication_id} = req.body;
        let newComment = await Comment.create({text, likes:0, dislikes:0, user_id, publication_id})
        newComment = await newComment.update({parentId});
        return res.json(newComment)
    }

    async getAll(req, res) {
        const comments = await Comment.findAll();
        return res.json(comments)
    }

    async getCommentRatings(req, res) {
        const commentRatings = await CommentRating.findAll({where: {comment_id: req.params.commentId}});
        return res.json(commentRatings)
    }

    async setCommentRating(req, res) {
        const commentId = req.params.commentId;
        const {userId, action, choice} = req.body;
        const rating = await CommentRating.findOne({where: {comment_id: commentId, user_id: userId}})
            .then(async (comment) => {
                if(action === 'set')
                    if(comment)
                        return await comment.update({choice: choice})
                    else
                        return await CommentRating.create({comment_id: commentId, user_id: userId, choice})
                else
                    return await comment.destroy()
            })

        return res.json(rating)
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
