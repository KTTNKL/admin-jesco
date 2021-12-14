const adminModel = require("./adminModel");
const bcrypt = require("bcrypt");
exports.findByUsername = (username) => {
  return adminModel
    .findOne({
      username: username,
    })
    .lean();
};

exports.validPassword = (password, user) => {
  return bcrypt.compare(password, user.password);
};

exports.addNewAdmin = async (username, email, password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  return adminModel.create({
    username: username,
    email: email,
    password: passwordHash,
  });
};

// exports.listAdmins = () => {
//   return adminModel.find({}).lean();
// };
