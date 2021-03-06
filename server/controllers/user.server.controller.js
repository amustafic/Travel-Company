var User = require("../models/user.server.model.js");

exports.list = function(req, res) {
  User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).send(err));
};

exports.create = function(req, res) {
  var user = new User(req.body);
  user.isAdmin = false;

  User.hashPassword(user.password, hashed => {
    user.password = hashed;
    user
      .save()
      .then(newUser => res.json(newUser))
      .catch(err => res.status(400).send(err));
  });
};

exports.read = function(req, res) {
  User.findOne(req.params)
    .then(foundUser => res.json(foundUser))
    .catch(err => res.status(400).send(err));
};

exports.update = function(req, res) {
  User.findOne(req.params)
    .then(foundUser => {
      foundUser.email = req.body.email;
      foundUser.phoneNumber = req.body.phoneNumber;
      foundUser.name = req.body.name;
      /* if password is changed, re-hash */
      if (foundUser.password != req.body.password) {
        User.hashPassword(req.body.password, hashed => {
          foundUser.password = hashed;
          foundUser
            .save()
            .then(updatedUser => res.json(updatedUser))
            .catch(err => res.status(400).send(err));
        });
      } else {
        foundUser
          .save()
          .then(updatedUser => res.json(updatedUser))
          .catch(err => res.status(400).send(err));
      }
    })
    .catch(err => res.status(400).send(err));
};

exports.delete = function(req, res) {
  User.findOneAndRemove(req.params)
    .then(deletedUser => res.json(deletedUser))
    .catch(err => res.status(400).send(err));
};

exports.postAuth = function(req, res) {
  res.json(req.user);
};

exports.logout = function(req, res) {
  req.session
    .destroy()
    .then(() => res.send("Logged Out!"))
    .catch(err => res.status(400).send(err));
};
