const Router = require('express');
const router = new Router();
const avatarController = require('../controllers/avatarController');

router.post('/', avatarController.create)
router.get('/:id', avatarController.getOne);
router.put('/:id', avatarController.update)
router.delete('/:id', avatarController.delete)


module.exports = router;
