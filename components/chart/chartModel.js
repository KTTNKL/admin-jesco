const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  userid: String,
  username: String,
  phone: String,
  address: String,
  item: [{productid:String, image: String, productName: String, price: Number, quantity: Number, subtotal: Number, status: String}],
  total: Number,
  note: String,
  shippingFee: Number,
  status: String,
  DateOfPurchase: Date

});
const order = mongoose.model("Order", orderSchema);

module.exports = order;
