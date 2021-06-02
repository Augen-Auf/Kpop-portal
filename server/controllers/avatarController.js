const { Avatar } = require('../models/models');
const ApiError = require('../error/ApiError');

class AvatarController {

    async create(req, res) {
        const {name, img} = req.body;
        const avatar = await Image.create({name, img});
        return res.json(avatar)
    }

    async update(req, res) {
        const id = req.params.id;
        const {name, img} = req.body;
        let avatar = await Avatar.findByPk(id);

        avatar.name = name;
        avatar.img = img;

        const new_avatar = await avatar.save();

        return res.json(new_avatar)
    }

    async getOne(req, res) {
        const id = req.params.id;
        const avatar = await Avatar.findByPk(id);
        return res.end(avatar.img)
    }

    async delete(req, res) {
        const id = req.params.id;
        const result = await Avatar.destroy({where: {id: id}});
        return res.json(result)
    }

}

module.exports = new AvatarController();
