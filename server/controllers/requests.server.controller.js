var Request = require("../models/requests.server.model.js");

exports.list = function(req, res) {
  res.json(req.requests);
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

// exports.update = function(req, res) {
//   Request.findById(req.params)
//     .then(foundRequest => {
//       foundRequest.title = req.body.title;
//       foundRequest.text = req.body.text;
//       foundRequest.pic = req.body.pic;
//       foundRequest.save()
//         .then(updatedRequest => res.json(updatedRequest))
//         .catch(err => res.status(400).send(err));
//     })
//     .catch(err => res.status(400).send(err));
// };

exports.delete = function(req, res) {
  Request.findByIdAndRemove(req.params)
    .then(deletedRequest => res.json(deletedRequest))
    .catch(err => res.status(400).send(err));
};

/**
 * Middleware:
 */

/* find N blogposts and pass in req.blogposts sorted by created date, either newest or oldest */
exports.getNewOrOld = function (req, res, next) {
  /* if order=old query param is passed, gets N oldest blogposts */
  var order = req.query.order == 'old' ? 1 : -1;
  Request.find()
    .sort({
      createdDate: order
    })
    .limit(parseInt(req.query.num))
    .then(foundRequests => req.requests = foundRequests)
    .catch(err => res.status(400).send(err))
    .then(() => next());
};
