const Router = require('express');
const router = new Router();
const newsController = require('../controllers/newsController');


router.post('/', newsController.create);
router.get('/:id', newsController.getOne);
router.get('/', newsController.getAll);
router.put('/:id', newsController.update)
router.delete('/:id', newsController.delete)

module.exports = router;