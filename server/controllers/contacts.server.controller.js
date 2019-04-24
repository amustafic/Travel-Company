var Contact = require("../models/contacts.server.model.js");

exports.list = function(req, res) {
  Contact.find({})
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).send(err));
};

exports.create = function(req, res) {
  var contact = new Contact(req.body);

  contact.save()
    .then(newContact => res.json(newContact))
    .catch(err => res.status(400).send(err));
};

exports.read = function(req, res) {
  Contact.findById(req.params)
    .then(foundContact => res.json(foundContact))
    .catch(err => res.status(400).send(err));
};

exports.delete = function(req, res) {
  Contact.findByIdAndRemove(req.params)
    .then(deletedContact => res.json(deletedContact))
    .catch(err => res.status(400).send(err));
};
