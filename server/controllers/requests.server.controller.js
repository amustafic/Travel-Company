var Request = require("../models/requests.server.model.js");

exports.list = function(req, res) {
  Request.find({})
    .then(users => res.json(requests))
    .catch(err => res.status(400).send(err));
};

exports.create = function(req, res) {
  var blogpost = new Request(req.body);

  blogpost.save()
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
