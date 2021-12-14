const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  email_address: String,
  address: String,
  phone: String
});
const product = mongoose.model("User", userSchema);

module.exports = product;
