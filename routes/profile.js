var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("admindddd")
  res.render('profileAdmin');
});

module.exports = router;
