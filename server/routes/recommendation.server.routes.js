var recommendation = require('../controllers/recommendation.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(recommendation.list)
    .post(recommendation.create);

router.route('/:_id')
    .get(recommendation.read)
    .delete(recommendation.delete);

module.exports = router;
