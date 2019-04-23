var mongoose = require('mongoose'),
    Recommendation = require('../models/recommendation.server.model.js');

exports.create = function(req, res) {
  var recommendation = new Recommendation(req.body);

  recommendation.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(recommendation);
    }
  });
};
