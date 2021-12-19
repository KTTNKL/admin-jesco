var express = require("express");
var router = express.Router();
const chartController = require("./chartController");
/* GET home page. */
router.get("/byDay", chartController.statisticByDay);
router.get("/byWeek", chartController.statisticByWeek);
router.get("/bymonth", chartController.statisticByMonth);
router.get("/byyear", chartController.statisticByYear);
router.get("/byquarter", chartController.statisticByQuarter);
router.get("/order", chartController.order);
router.get("/order/:id", chartController.orderDetail);
module.exports = router;


