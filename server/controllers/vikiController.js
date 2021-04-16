const {Viki} = require('../models/models');
const ApiError = require('../error/ApiError');

class VikiController {
    async create(req, res) {
        const {title, lid, text, author_id} = req.body;
        const viki = await Viki.create({title, lid, text, author_id});
        return res.json(viki)
    }

    async getAll(req, res) {

    }

}

module.exports = new VikiController();