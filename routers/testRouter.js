const router = require('express').Router();
const controllers = require('./../controllers/testsController');

router.route('/tests').get(controllers.getAllTest);
router.route('/test/result').post(controllers.getAllResult);

module.exports = router;
