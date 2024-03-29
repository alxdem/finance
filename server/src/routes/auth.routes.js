const Router = require('express');
const router = new Router();
const controller = require('../controllers/authController');
const { check } = require('express-validator');
const authMiddleware = require('../middleWares/auth.middleware');

// router.post('/registration', [
//   check('email', 'Поле email не может быть пустым').notEmpty(),
//   check('password', 'Пароль должен быть дленнее 6 и меньше 10 символов').isLength({
//     min: 6,
//     max: 10
//   })
// ], controller.registration);
router.post('/login', controller.login);
router.post('/refresh-tokens', controller.refreshTokens);
// router.get('/users', authMiddleware, controller.getUsers);

module.exports = router;