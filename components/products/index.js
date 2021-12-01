var express = require("express");
var router = express.Router();
const productController = require("./productController");
/* GET home page. */
router.get("/", productController.list);
router.route("/add").get(productController.add).post(productController);
router.get("/:id", productController.item);

module.exports = router;
