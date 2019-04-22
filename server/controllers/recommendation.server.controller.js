var mongoose = require('mongoose'),
    Contact = require('../models/recommendation.server.model.js');

/* Create a Contact Form */
exports.create = function(req, res) {
  /* Instantiate a Contact Form */
  var recommendation = new Recommendation(req.body);

  /* Then save the Contact Form */
  recommendation.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(recommendation);
    }
  });
};

exports.read = function(req, res) {
  Recommendation.findById(req.params)
    .then(foundRec => res.json(foundRec))
    .catch(err => res.status(400).send(err));
};
