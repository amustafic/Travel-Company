/* Dependencies */
var contact = require('../controllers/contacts.server.controller.js'),
    express = require('express'),
    router = express.Router();

/* Read all blogposts, Create new blogpost */
router.route('/')
    .get(contact.getNewOrOld, contact.list)
    .post(contact.create);

/* Read/Update/Delete blogpost via _id */
router.route('/:_id')
    .get(contact.read)
    .delete(contact.delete);

module.exports = router;
