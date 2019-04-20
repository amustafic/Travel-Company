var config = require('./config'),
    mongoose = require('mongoose'),
    express = require('./express');
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    // User = require('../models/passport_user');


module.exports.start = function() {
  var app = express.init();
  app.listen(config.port, function() {
    console.log('App listening on port', config.port);
  });
};
