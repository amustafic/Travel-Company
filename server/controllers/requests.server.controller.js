var mongoose = require('mongoose'),
    Request = require('../models/requests.server.model.js');

exports.request = function(req, res) {

  var request = new Request(req.body);

  contact.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(request);
    }
  });
};

exports.read = function(req, res) {
  res.json(req.request);
};
