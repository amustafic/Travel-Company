var recommendationController = require('../controllers/recommendation.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')

  .post(recommendationController.create);

module.exports = router;
