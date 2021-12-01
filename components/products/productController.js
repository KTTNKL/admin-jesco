const productService = require("./productService");

exports.list = async function (req, res) {
  let page;
  if (req.query.page === undefined) {
    page = 1;
  } else if (req.query.page < 0) {
    page = 1;
  } else {
    page = parseInt(req.query.page);
  }
  const products = await productService.listProducts(page);
  let totalPage = await productService.totalProductNum();
  totalPage = Math.ceil(totalPage / 4);

  res.render("index", {
    page: page, // Current Page
    totalPage, // Total Page
    products: products,
  });
};

exports.item = async function (req, res) {
  let product;
  try {
    product = await productService.viewOne(req.params.id);
    product._id = (product._id).toString();
  } catch (err) {}
  res.render("product_form", { product });
};

exports.add = async function (req, res) {
  res.render("product_add_form");
};
exports.create = async function (req, res) {
  const product = req.body;
  await productService.create(product);
  res.render("product_add_form");
};

exports.update = async function (req, res){
  const product = req.body;
  await productService.update(product);
  console.log(req.body._id);
  res.render("product_form", {product});
}

exports.delete = async function (req, res){
  console.log(req.params.id);
  await productService.delete(req.params.id);
  res.redirect("/");
}