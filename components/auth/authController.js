const adminService = require("./adminService");

exports.login = (req, res) => {
  const wrongPassword = req.query["wrong-password"] !== undefined;
  res.render("auth/views/login", { wrongPassword });
};
exports.logout = (req, res) => {
  req.logout();
  res.redirect("/login");
};
exports.addAdmin = (req, res) => {
  res.render("auth/views/addAdmin");
};
exports.getAddAdmin = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await adminService.addNewAdmin(username, email, password);
  res.redirect("auth/views/login");
};

exports.getAdminList = async (req, res) => {
  const admins = await adminService.listAdmins();
  console.log(admins);
  res.render("auth/views/adminList", { admins });
};
