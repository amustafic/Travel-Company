const path = require('path'),
    express = require('express'),
    Promise = require("bluebird"),
    mongoose = Promise.promisifyAll(require("mongoose")),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    session = require("express-session"),
    listingsRouter = require('../routes/listings.server.routes'),
    contactsRouter = require('../routes/contacts.server.routes'),
    userRouter = require('../routes/login.server.routes.js'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/passport_user');
    usersRouter = require("../routes/user.server.routes")

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();
  /* Passport config */
  require("./passport")(passport);

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));


  /**TODO
  Serve static files */
  app.use(express.static('client'))

  app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

  /*  Use the routers for requests to any API */
  app.use('/api/listings', listingsRouter);
  app.use('/api/user', userRouter);
  app.use('/api/contacts', contactsRouter);
  app.use("/api/users", usersRouter);

  app.get("/api/session", (req, res) => {
      console.log("THIS HAPPINGING");
      res.send(req.session.passport);
    });

  /*Go to homepage for all routes not specified */
  app.all('/*', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
  });
  return app;
};
