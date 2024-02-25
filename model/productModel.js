// models/productModel.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  dateOfSale: Date,
  category: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
