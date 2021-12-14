const userService = require("./userService");

exports.list = async function (req, res) {
  // let page;
  // if (req.query.page === undefined) {
  //   page = 1;
  // } else if (req.query.page < 0) {
  //   page = 1;
  // } else {
  //   page = parseInt(req.query.page);
  // }
  // const users = await userService.listUsers(page);
  // let totalPage = await userService.totalUserNum();
  // totalPage = Math.ceil(totalPage / 4);
  const users = await userService.listUsers();
  res.render("userList", {
    // page: page, // Current Page
    // totalPage, // Total Page
    users: users
  });
};

exports.item = async function (req, res) {
  let product;
  try {
    product = await userService.viewOne(req.params.id);
    product._id = product._id.toString();
  } catch (err) {}
  res.render("products/views/product_form", { product });
};