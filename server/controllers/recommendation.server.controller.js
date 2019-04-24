var Recommendation = require("../models/recommendation.server.model.js");

exports.list = function(req, res) {
  Recommendation.find({})
    .then(recommendations => res.json(recommendations))
    .catch(err => res.status(400).send(err));
};

exports.create = function(req, res) {
  var recommendation = new Recommendation(req.body);

  recommendation.save()
    .then(newRecommendation => res.json(newRecommendation))
    .catch(err => res.status(400).send(err));
};

exports.read = function(req, res) {
  Recommendation.findById(req.params)
    .then(foundRecommendation => res.json(foundRecommendation))
    .catch(err => res.status(400).send(err));
};

exports.delete = function(req, res) {
  Recommendation.findByIdAndRemove(req.params)
    .then(deletedRecommendation => res.json(deletedRecommendation))
    .catch(err => res.status(400).send(err));
};
