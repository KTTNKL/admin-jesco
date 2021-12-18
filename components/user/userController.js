const userService = require("./userService");

exports.list = async function (req, res) {
  let page;
  if (req.query.page === undefined) {
    page = 1;
  } else if (req.query.page < 0) {
    page = 1;
  } else {
    page = parseInt(req.query.page);
  }
  const users = await userService.listUsers(page);
  let totalPage = await userService.totalUserNum();
  totalPage = Math.ceil(totalPage / 4);
  //const users = await userService.listUsers();
  
  res.render("user/views/userList", {
    page: page, // Current Page
    totalPage, // Total Page
    users: users
  });
};

exports.item = async function (req, res) {
  let user;

  try {
    user = await userService.viewOne(req.params.id);
    console.log(user);
    user._id = user._id.toString();
  } catch (err) {}
  res.render("user/views/profile", { user });
};

exports.ban = async function (req, res){
  const userID = req.params.id;
  const result = await userService.banUser(userID);
  res.redirect(req.get('referer'));
}

exports.unban = async function (req, res){
  const userID = req.params.id;
  const result = await userService.unbanUser(userID);
  res.redirect(req.get('referer'));
}