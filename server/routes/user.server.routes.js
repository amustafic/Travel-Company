var user_controller = require("../controllers/user.server.controller.js"),
  express = require("express"),
  passport = require("passport"),
  router = express.Router();

router
  .route("/")
  .get(user_controller.list)
  .post(user_controller.create);

router
  .route("/:email")
  .get(user_controller.read)
  .put(user_controller.update)
  .delete(user_controller.delete);

router
  .route("/login")
  .post(passport.authenticate("local"), user_controller.postAuth);

router.route("/logout").get(user_controller.logout);

module.exports = router;
