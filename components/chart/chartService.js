const Chart = require("./chartModel");

exports.listOrder = async () => {
  let listUser = await Chart.find({}).lean();
  return listUser;
};