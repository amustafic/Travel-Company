/* Dependencies */
var Contact = require("../models/contacts.server.model.js");

/* retrieve all blogposts */
exports.list = function(req, res) {
  res.json(req.contacts);
};

/* Create a blogpost */
exports.create = function(req, res) {
  var contact = new Contact(req.body);

  /* save to database */
  contact.save()
    .then(newContact => res.json(newContact))
    .catch(err => res.status(400).send(err));
};

/* Show the current blogpost */
exports.read = function(req, res) {
  Contact.findById(req.params)
    .then(foundContact => res.json(foundContact))
    .catch(err => res.status(400).send(err));
};

/* Delete a blogpost */
exports.delete = function(req, res) {
  Contact.findByIdAndRemove(req.params)
    .then(deletedContact => res.json(deletedContact))
    .catch(err => res.status(400).send(err));
};

/**
 * Middleware:
 */

/* find N blogposts and pass in req.blogposts sorted by created date, either newest or oldest */
exports.getNewOrOld = function (req, res, next) {
  /* if order=old query param is passed, gets N oldest blogposts */
  var order = req.query.order == 'old' ? 1 : -1;
  Contact.find()
    .sort({
      createdDate: order
    })
    .limit(parseInt(req.query.num))
    .then(foundContacts => req.contacts = foundContacts)
    .catch(err => res.status(400).send(err))
    .then(() => next());
};
