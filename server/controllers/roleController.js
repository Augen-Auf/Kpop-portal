const {Role} = require('../models/models');

class RoleController {
    
    async getOne(res, req) {
        const id = req.params.id
        const role = await Role.findByPk(id);
        return res.json(role)
    }

    async getAll(req, res) {
        const roles = await Role.findAll();
        return res.json(roles)
    }


}

module.exports = new RoleController();