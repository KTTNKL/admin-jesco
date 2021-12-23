var express = require('express');
var router = express.Router();
const adminService = require('../components/auth/adminService');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profileAdmin');
});

router.post('/change',async function(req,res){
  const user = req.body;
  if (user.username) {
    req.session.passport.user.username = user.username;
  }
  if (user.email) {
    req.session.passport.user.email = user.email;
  }
  let admin = {
    _id : req.user._id,
    username : req.body.username,
    email : req.body.email,
  };
  await adminService.update(admin);
  res.render('profileAdmin');
});
module.exports = router;

