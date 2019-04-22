var path = require('path'),
    express = require('express'),
<<<<<<< Updated upstream
    mongoose = require('mongoose'),
=======
  //  Promise = require("bluebird"),
    //mongoose = Promise.promisifyAll(require("mongoose")),
    mongoose = require("mongoose");
>>>>>>> Stashed changes
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes'),
<<<<<<< Updated upstream
=======
    contactsRouter = require('../routes/contacts.server.routes'),
    requestsRouter = require('../routes/requests.server.routes'),
    recommendationsRouter = require('../routes/recommendation.server.routes'),
>>>>>>> Stashed changes
    userRouter = require('../routes/login.server.routes.js'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/passport_user');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());


  /**TODO
  Serve static files */
  app.use(express.static('client'))

  app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
  /**TODO
  Use the listings router for requests to the api */
  app.use('/api/listings', listingsRouter);

  app.use('/api/user', userRouter);
<<<<<<< Updated upstream
=======
  app.use('/api/contacts', contactsRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/blogposts", blogpostsRouter);
  app.use("/api/requests", requestsRouter);
  app.use("/api/recommendation", recommendationsRouter)
>>>>>>> Stashed changes


  /**TODO
  Go to homepage for all routes not specified */
  app.all('/*', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
  });
  return app;
};
