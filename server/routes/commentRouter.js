const Router = require('express');
const router = new Router();
const commentController = require('../controllers/commentController');


router.post('/', commentController.create);
router.get('/:id', commentController.getOne);
router.get('/', commentController.getAll);
router.put('/:id', commentController.update)
router.delete('/:id', commentController.delete)


module.exports = router;