const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/password/change', userController.changePassword);
router.post('/change', userController.updateUser);
router.get('/auth', authMiddleware, userController.check);

module.exports = router;
