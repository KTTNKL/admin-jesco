var express = require("express");
var router = express.Router();
const productController = require("./productController");
/* GET home page. */
router.get("/", productController.list);
router.route("/add").get(productController.add).post(productController.create);
router.route("/:id").get(productController.item).post(productController.update);
router.get("/delete/:id",productController.delete);
module.exports = router;
