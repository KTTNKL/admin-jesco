var express = require("express");
var router = express.Router();
const authController = require("./authController");
const passport = require("../../passport");

router.get("/login", authController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login?wrong-password",
  })
);

router.get("/logout", authController.logout);

//router.get('/register',authController.register);
router.get("/add_addmin", authController.addAdmin);
router.post("/add_addmin", authController.getAddAdmin);

module.exports = router;
