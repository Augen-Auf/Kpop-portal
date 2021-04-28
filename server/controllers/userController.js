const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/models');
const { Op } = require("sequelize");

const generateJwt = (id, email, name, role_id) => {
    return jwt.sign(
        {id, email, name, role_id},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
};

class UserController {
    async registration(req, res, next) {
        const {email, name, password, role_id} = req.body;
        if(!email || !name || !password) {
            return next(ApiError.badRequest('Некорректный email, name или password'))
        }
        const candidate = await User.findOne({ where: { [Op.or]: [{email}, {name}] }});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email или name уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, name, password: hashPassword, role_id});
        const token = generateJwt(user.id, user.email, user.name, user.role_id);
        return res.json({token})
    };

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user) {
            return next(ApiError.internal('Неверный email или пароль'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword) {
            return next(ApiError.internal('Неверный email или пароль'))
        }
        const token = generateJwt(user.id, user.email, user.name, user.role_id);
        return res.json({token});
    };

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.name, req.user.role_id);
        return res.json({token});
    }
}

module.exports = new UserController();