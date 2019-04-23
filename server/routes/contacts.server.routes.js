var contact = require('../controllers/contacts.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(contact.getNewOrOld, contact.list)
    .post(contact.create);

router.route('/:_id')
    .get(contact.read)
    .delete(contact.delete);

module.exports = router;
