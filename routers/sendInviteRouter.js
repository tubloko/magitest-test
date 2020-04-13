const router = require('express').Router();
const controllers = require('./../controllers/sendInviteController');

router.route('/mail/generate-link').post(controllers.generateLink);
router.route('/mail').post(controllers.sendInvite);
router.route('/mail/invite').post(controllers.sendInvite);

module.exports = router;
