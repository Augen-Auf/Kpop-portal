const {Viki} = require('../models/models');
const ApiError = require('../error/ApiError');

class VikiController {
    async create(req, res) {
        const {title, lid, text, author_id} = req.body;
        const viki = await Viki.create({title, lid, text, author_id});
        return res.json(viki)
    }
    async update(req, res) {
        const id = req.params.id;
        const {title, lid, text, author_id} = req.body;
        let Viki = await Viki.findByPk(id)
        Viki.title = title
        Viki.lid = lid
        Viki.text = text
        Viki.author_id = author_id

        const new_viki = await Viki.save()
        return res.json(new_viki)
    }

    async getOne(req, res) {
        const id = req.params.id
        const viki = await Viki.findByPk(id);
        return res.json(viki)
    }

    async getAll(req, res) {
        const viki = await Viki.findAll();
        return res.json(viki)
    }

    async delete(req, res) {
        const id = req.params.id
        const result = await Viki.destroy({where: {id: id}})
        return res.json(result)
    }

}

module.exports = new VikiController();