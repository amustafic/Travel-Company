var recommendationController = require('../controllers/recommendation.server.controller.js'),
    express = require('express'),
    router = express.Router();



//router.route(':username').get(auth.getUserByUsername);


router.route('/')
  .post(recommendationController.create);
    // restrict index for logged in user only
//  router  .get('/', recommendationController.read);

// route to register page
//router.get('/login', auth.register);

// route for register action
//router.post('/login', auth.doRegister);

// route to login page
//router.get('/login', auth.login);

// route for login action
//router.post('/login', auth.doLogin);

// route for logout action
//router.get('/', auth.logout);

module.exports = router;
