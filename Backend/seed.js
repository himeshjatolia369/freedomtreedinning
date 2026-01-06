const mongoose = require("mongoose")
const Product = require("./module/Product")
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch(err => console.error(err))

const products = [
  {
  id: 1,
  name: "Magnolia Ceramic Dinner Plate1",
  price: 1200,
  images: ["/images/lee.jpg","/images/lee.jpg","/images/lee.jpg","/images/lee.jpg","/images/lee.jpg"],
  category: "Dinnerware",
  shopByCategory: "Dinner Sets",
  color: "White",
  size: "13 CM",
  material: "Ceramic",
  sale: 30,
  specialPrice: false
}
,
  {
  id: 2,
  name: "Magnolia Ceramic Dinner Plate1",
  price: 1960,
  images: ["/images/lee.jpg","/images/lee.jpg","/images/lee.jpg","/images/lee.jpg","/images/lee.jpg"],
  category: "Dinnerware",
  shopByCategory: "Dinner Sets",
  color: "White",
  size: "13 CM",
  material: "Ceramic",
  sale: 30,
  specialPrice: false
}
,
  {
  id: 3,
  name: "Magnolia Ceramic Dinner Plate1",
  price: 2260,
  images: ["/images/lee.jpg","/images/lee.jpg","/images/lee.jpg","/images/lee.jpg","/images/lee.jpg"],
  category: "Dinnerware",
  shopByCategory: "Dinner Sets",
  color: "White",
  size: "13 CM",
  material: "Ceramic",
  sale: 30,
  specialPrice: false
}
,
  {
  id: 4,
  name: "Magnolia Ceramic Dinner Plate1",
  price: 1360,
  images: ["/images/lee.jpg","/images/lee.jpg","/images/lee.jpg","/images/lee.jpg","/images/lee.jpg"],
  category: "Dinnerware",
  shopByCategory: "Dinner Sets",
  color: "White",
  size: "13 CM",
  material: "Ceramic",
  sale: 30,
  specialPrice: false
}
,
  {
  id: 5,
  name: "Magnolia Ceramic Dinner Plate1",
  price: 1780,
  images: ["/images/lee.jpg","/images/lee.jpg","/images/lee.jpg","/images/lee.jpg","/images/lee.jpg"],
  category: "Dinnerware",
  shopByCategory: "Dinner Sets",
  color: "White",
  size: "13 CM",
  material: "Ceramic",
  sale: 30,
  specialPrice: false
}
,
 
];


const seed = async () => {
  try {
    await Product.deleteMany()
    await Product.insertMany(products)
    console.log("✅ Data inserted successfully")
    process.exit()
  } catch (error) {
    console.error("❌ Seeding failed", error)
    process.exit(1)
  }
}

seed()
