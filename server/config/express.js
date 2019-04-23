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
    requestsRouter = require('../routes/requests.server.routes'),
    recommendationRouter = require('../routes/recommendation.server.routes.js'),
    blogpostsRouter = require("../routes/blog.server.routes"),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
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

  app.use(express.static('client'))

  app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

  /*  Use the routers for requests to any API */
  app.use('/api/listings', listingsRouter);
  app.use('/api/contacts', contactsRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/blogposts", blogpostsRouter);
  app.use("/api/requests", requestsRouter);
  app.use("/api/recommendations", recommendationRouter);
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
