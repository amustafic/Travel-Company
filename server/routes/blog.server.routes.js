var blogpost_controller = require('../controllers/blog.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(blogpost_controller.getNewOrOld, blogpost_controller.list)
    .post(blogpost_controller.create);

router.route('/:_id')
    .get(blogpost_controller.read)
    .put(blogpost_controller.update)
    .delete(blogpost_controller.delete);

module.exports = router;
