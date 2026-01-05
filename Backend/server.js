const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const productRoutes = require("./routes/productRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/collegeproject")
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
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
