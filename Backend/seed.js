const mongoose = require("mongoose")
const Product = require("./module/Product")
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch(err => console.error(err))

const products = [
  /* -------------------- DINNERWARE -------------------- */
  {
    id: 1,
    name: "Bombay City Ceramic Dinner Plate",
    price: 1180,
    images: [
      "/images/dinnerware/bombay-dinner-plate-1.jpg",
      "/images/dinnerware/bombay-dinner-plate-2.jpg",
      "/images/dinnerware/bombay-dinner-plate-2.jpg",
      "/images/dinnerware/bombay-dinner-plate-2.jpg",
      "/images/dinnerware/bombay-dinner-plate-2.jpg"
    ],
    category: "Dinnerware",
    shopByCategory: "Plates and Platters",
    color: "White",
    size: "19 CM",
    material: "Ceramic",
    sale: 30,
    specialPrice: false
  },
  {
    id: 2,
    name: "Bombay City Ceramic Side Plate",
    price: 680,
    images: [
      "/images/dinnerware/bombay-side-plate-1.jpg"
    ],
    category: "Dinnerware",
    shopByCategory: "Plates and Platters",
    color: "White",
    size: "13 CM",
    material: "Ceramic",
    sale: null,
    specialPrice: false
  },
  {
    id: 3,
    name: "Bombay City Small Straight Serving Bowl",
    price: 1280,
    images: [
      "/images/serveware/bombay-small-bowl.jpg"
    ],
    category: "Serveware",
    shopByCategory: "Bowls",
    color: "Neutral",
    size: "Medium",
    material: "Ceramic",
    sale: 30,
    specialPrice: false
  },
  {
    id: 4,
    name: "Bombay City Large Straight Serving Bowl",
    price: 1480,
    images: [
      "/images/serveware/bombay-large-bowl.jpg"
    ],
    category: "Serveware",
    shopByCategory: "Bowls",
    color: "Neutral",
    size: "Large",
    material: "Ceramic",
    sale: null,
    specialPrice: false
  },

  /* -------------------- CAKE & BAKEWARE -------------------- */
  {
    id: 5,
    name: "Color Pop Coral Ceramic Ramekin (Set of 2)",
    price: 800,
    images: [
      "/images/bakeware/coral-ramekin.jpg"
    ],
    category: "Cake and Bakeware",
    shopByCategory: "Bowls",
    color: "Coral",
    size: "10 CM",
    material: "Ceramic",
    sale: null,
    specialPrice: false
  },
  {
    id: 6,
    name: "Color Pop Black & Mint Ramekin (Set of 2)",
    price: 800,
    images: [
      "/images/bakeware/black-mint-ramekin.jpg"
    ],
    category: "Cake and Bakeware",
    shopByCategory: "Bowls",
    color: "Mint",
    size: "10 CM",
    material: "Ceramic",
    sale: null,
    specialPrice: false
  },

  /* -------------------- SERVEWARE -------------------- */
  {
    id: 7,
    name: "Montane Ceramic Oval Platter",
    price: 2280,
    images: [
      "/images/serveware/montane-oval-platter.jpg"
    ],
    category: "Serveware",
    shopByCategory: "Plates and Platters",
    color: "Blue",
    size: "Large",
    material: "Ceramic",
    sale: 50,
    specialPrice: false
  },

  /* -------------------- TABLE ACCENTS -------------------- */
  {
    id: 8,
    name: "Phases Ceramic Center Piece",
    price: 2480,
    images: [
      "/images/table-accents/phases-centerpiece.jpg"
    ],
    category: "Table Accents",
    shopByCategory: "Center Piece",
    color: "Red",
    size: "Medium",
    material: "Ceramic",
    sale: null,
    specialPrice: true
  },
  {
    id: 9,
    name: "Oval Illusion Sheesham Wood Center Piece",
    price: 3480,
    images: [
      "/images/table-accents/illusion-wood.jpg"
    ],
    category: "Table Accents",
    shopByCategory: "Center Piece",
    color: "Neutral",
    size: "Large",
    material: "Mango Wood",
    sale: null,
    specialPrice: false
  },

  /* -------------------- TABLE LINENS -------------------- */
  {
    id: 10,
    name: "Keora Stripers Honey Bloom Dinner Napkin (Set of 4)",
    price: 1480,
    images: [
      "/images/table-linen/keora-napkin.jpg"
    ],
    category: "Table Linens",
    shopByCategory: "Table linen",
    color: "Green",
    size: "Medium",
    material: "Pure Cotton",
    sale: null,
    specialPrice: false
  },
  {
    id: 11,
    name: "Gypsy Rose Aqua Blue Dinner Napkin (Set of 4)",
    price: 1280,
    images: [
      "/images/table-linen/gypsy-blue.jpg"
    ],
    category: "Table Linens",
    shopByCategory: "Table linen",
    color: "Aqua",
    size: "Medium",
    material: "Pure Cotton",
    sale: null,
    specialPrice: false
  }
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
