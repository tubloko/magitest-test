const router = require('express').Router();
const controllers = require('./../controllers/authController');


router.route('/user/register').post(controllers.register);
router.route('/user/login').post(controllers.login);

module.exports = router;
