const {Image} = require('../models/models');
const ApiError = require('../error/ApiError');

class ImageController {
    async create(req, res) {
        const {image, type, publication_id} = req.body;
        const picture = await Image.create({image, type, publication_id});
        return res.json(picture)
    }

    async delete(req, res)
    {
        const id = req.params.id;
        const result = await Image.destroy({where: {id: id}});
        return res.json(result)
    }

}

module.exports = new ImageController();