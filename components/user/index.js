var express = require("express");
var router = express.Router();
const userController = require("./userController");
/* GET home page. */
router.get("/", userController.list);
router.get("/ban/:id", userController.ban);
router.get("/unban/:id", userController.unban);
router.get("/:id", userController.item);
module.exports = router;
