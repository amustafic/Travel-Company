var userController = require("../controllers/user.server.controller.js"),
  express = require("express"),
  passport = require("passport"),
  router = express.Router();

router
  .route("/")
  .get(userController.list)
  .post(userController.create);

router
  .route("/:email")
  .get(userController.read)
  .put(userController.update)
  .delete(userController.delete);

router
  .route("/login")
  .post(passport.authenticate("local"), userController.postAuth);

router.route("/logout").get(userController.logout);

module.exports = router;
