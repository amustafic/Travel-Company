var requestController = require('../controllers/requests.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/').post(requestController.request);

module.exports = router;
