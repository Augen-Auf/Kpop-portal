const Router = require('express');
const router = new Router();
const vikiController = require('../controllers/vikiController');


router.post('/', vikiController.create);
//router.get('/',vikiController.getAll);
//router.get('/:id', vikiController.getOne);

module.exports = router;