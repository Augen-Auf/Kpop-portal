const {Image} = require('../models/models');
const ApiError = require('../error/ApiError');

class ImageController {
    async create(req, res) {
        const {image, type, publication_id} = req.body;
        const picture = await Image.create({image, type, publication_id});
        return res.json(picture)
    }

    async getAll(req, res) {

    }

}

module.exports = new ImageController();