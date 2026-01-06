const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err))

const app = express();
app.use("/images", express.static("public/images"));
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
