const User = require("./userModel");
const PAGE_SIZE = 4;

// exports.listUsers = (page) => {
//   console.log(page);

//   const Skip = (page - 1) * PAGE_SIZE;
//   return User.find({}).skip(Skip).limit(PAGE_SIZE);
// };

exports.listUsers = async (page) => {
  
  const Skip = (page - 1) * PAGE_SIZE;
  page = parseInt(page);
  let listUser = await User.find({}).skip(Skip).limit(PAGE_SIZE);
  return listUser;
};
//exports.listUsers = () => User.find().lean()
exports.totalUserNum = () => User.countDocuments();
exports.viewOne = (id) => User.findById(id).lean();

exports.banUser = async (userID) =>{
  console.log("bannnn");
  const result = await User.updateOne({ _id: userID },
      { $set: {isBan: Boolean(true)}});
  return result;
}

exports.unbanUser = async (userID) =>{
  console.log("unbannnnnn");
  const result = await User.updateOne({ _id: userID },
      { $set: {isBan: Boolean(false)}});
  return result;
}