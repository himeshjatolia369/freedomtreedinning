const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");


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
