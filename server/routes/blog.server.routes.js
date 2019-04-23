var blogPost = require('../controllers/blog.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(blogPost.getNewOrOld, blogPost.list)
    .post(blogPost.create);

router.route('/:_id')
    .get(blogPost.read)
    .put(blogPost.update)
    .delete(blogPost.delete);

module.exports = router;
