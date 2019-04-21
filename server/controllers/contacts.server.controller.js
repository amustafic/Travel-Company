/* Dependencies */
var mongoose = require('mongoose'),
    Contact = require('../models/contacts.server.model.js');

/* Create a Contact Form */
exports.contact = function(req, res) {
  /* Instantiate a Contact Form */
  var contact = new Contact(req.body);

  /* Then save the Contact Form */
  contact.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(contact);
    }
  });
};

/* Show the current Contact Form */
exports.read = function(req, res) {
  //send back the listing as json from the request
  res.json(req.contact);
};
