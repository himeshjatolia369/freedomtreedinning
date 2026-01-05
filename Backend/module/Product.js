const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  images: [String],
  category: String,
  shopByCategory: String,
  color: String,
  size: String,
  material: String,
  sale: Number,
  specialPrice: Boolean
})

module.exports = mongoose.model("Product", productSchema)
