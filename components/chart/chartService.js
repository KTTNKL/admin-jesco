const Chart = require("./chartModel");
const Product = require("../products/productModel")
const PAGE_SIZE = 4;

exports.listOrder = async () => {
  let listOrder = await Chart.find({}).lean();
  return listOrder;
};

exports.listBill = async (page) => {
  
  const Skip = (page - 1) * PAGE_SIZE;
  page = parseInt(page);
  let listBills = await Chart.find({}).skip(Skip).limit(PAGE_SIZE);
  return listBills;
};

exports.totalBillNum = () => Chart.countDocuments();

exports.viewOne = (id) => Chart.findById(id).lean();

exports.listProducts = async () => {
  let listProducts = await Product.find({}).lean();
  return listProducts;
};
