const Chart = require("./chartModel");
const PAGE_SIZE = 4;

exports.listOrder = async () => {
  let listUser = await Chart.find({}).lean();
  return listUser;
};

exports.listBill = async (page) => {
  
  const Skip = (page - 1) * PAGE_SIZE;
  page = parseInt(page);
  let listBills = await Chart.find({}).skip(Skip).limit(PAGE_SIZE);
  return listBills;
};

exports.totalBillNum = () => Chart.countDocuments();