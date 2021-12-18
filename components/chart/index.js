var express = require("express");
var router = express.Router();
const chartController = require("./chartController");
/* GET home page. */
router.get("/byDay", chartController.statisticByDay);
router.get("/byWeek", chartController.statisticByWeek);
router.get("/bymonth", chartController.statisticByMonth);

module.exports = router;

