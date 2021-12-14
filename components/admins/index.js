var express = require("express");
var router = express.Router();
const adminController = require("./adminController");

router.get("/", adminController.getAdminList);

module.exports = router;
