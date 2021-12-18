var express = require("express");
var router = express.Router();
const chartController = require("./chartController");
/* GET home page. */
router.get("/", chartController.list);

module.exports = router;

