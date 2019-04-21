/* Dependencies */
var mongoose = require('mongoose'),
    Contact = require('../models/requests.server.model.js');

/* Create a Contact Form */
exports.request = function(req, res) {
  /* Instantiate a Contact Form */
  var request = new Request(req.body);

  /* Then save the Contact Form */
  request.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(request);
    }
  });
};

/* Show the current Contact Form */
exports.read = function(req, res) {
  //send back the listing as json from the request
  res.json(req.request);
};
