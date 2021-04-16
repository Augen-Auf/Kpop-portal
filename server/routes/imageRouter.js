const Router = require('express');
const router = new Router();
const imageController = require('../controllers/imageController');


router.post('/', imageController.create);
//router.get('/', imageController.getAll());


module.exports = router;