var Request = require("../models/requests.server.model.js");

exports.list = function(req, res) {
  Request.find({})
    .then(requests => res.json(requests))
    .catch(err => res.status(400).send(err));
};

exports.create = function(req, res) {
  var request = new Request(req.body);

  request.save()
    .then(newRequest => res.json(newRequest))
    .catch(err => res.status(400).send(err));
};

exports.read = function(req, res) {
  Request.findById(req.params)
    .then(foundRequest => res.json(foundRequest))
    .catch(err => res.status(400).send(err));
};

exports.delete = function(req, res) {
  Request.findByIdAndRemove(req.params)
    .then(deletedRequest => res.json(deletedRequest))
    .catch(err => res.status(400).send(err));
};
