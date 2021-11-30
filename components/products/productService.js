const Product = require("./productModel");
const PAGE_SIZE = 4;

exports.listProducts = (page) => {
  console.log(page);

  const Skip = (page - 1) * PAGE_SIZE;
  return Product.find({}).skip(Skip).limit(PAGE_SIZE);
};

exports.totalProductNum = () => Product.countDocuments();
exports.viewOne = (id) => Product.findById(id).lean();
