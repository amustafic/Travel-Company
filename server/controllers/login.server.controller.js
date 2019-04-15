var mongoose = require('mongoose'),
    User = require('../models/passport_user.js');

    exports.register = function (req, res) {
       console.log("registering: " + req.body.username);
       User.register(new User({
           username: req.body.username
       }), req.body.password, function (err, user) {
           if (err) {
               console.log(err);
               return res.send(err);
           } else {
               res.send({
                   success: true,
                   user: user
               });
           }
       });
    };
/*
exports.login = function(req, res) {
var userController = {};

// Restrict access to root page
/*
userController.home = function(req, res) {
  res.render('index', { user : req.user });
};
*/
// Go to registration page
/*
userController.register = function(req, res) {
  res.render('login');
};
*/
// Post registration
/*
userController.registerUser = function(req, res) {
  User.register(new User({ username : req.body.username}), req.body.password, function(err, user) {
    if (err) {
      return res.render('login', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.json(user);
      res.redirect('/index');
    });
  });
};
};
/*
// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};
*/
