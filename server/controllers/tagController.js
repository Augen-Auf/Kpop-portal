const {Tag} = require('../models/models');
const ApiError = require('../error/ApiError');

class TagController {
    async create(req, res) {
        const {tag} = req.body;
        const name = await Tag.create({tag});
        return res.json(name)
    }

    async getAll(req, res) {
        const tags = await Tag.findAll();
        return res.json(tags)
    }
}

module.exports = new TagController();