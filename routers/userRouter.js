const router = require('express').Router();
const controllers = require('./../controllers/userController');

router.route('/user/:filter').get(controllers.getAllUsers);
router.route('/user').post(controllers.addNewUser);
router.route('/user/:id').put(controllers.updateUser);
router.route('/user/:id').delete(controllers.deleteUser);

module.exports = router;
