var requestController = require('../controllers/requests.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(requestController.list)
    .post(requestController.create);

router.route('/:_id')
    .get(requestController.read)
    .delete(requestController.delete);

module.exports = router;
