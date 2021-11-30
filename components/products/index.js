var express = require("express");
var router = express.Router();
const productController = require("./productController");
/* GET home page. */
router.get("/", productController.list);
router.get("/add", productController.add);
router.get("/:id", productController.item);

module.exports = router;
