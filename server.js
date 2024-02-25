// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const statisticsRoutes = require("./routes/statisticsRoutes");
const barChartRoutes = require("./routes/barChartRoutes");
const pieChartRoutes = require("./routes/pieChartRoutes");
const combinedRoutes = require("./routes/combinedRoutes");
const customMiddleware = require("./middleware/customMiddleware");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/productDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Middleware
app.use(bodyParser.json());
app.use(customMiddleware);

// Routes
app.use("/products", productRoutes);
app.use("/statistics", statisticsRoutes);
app.use("/bar-chart", barChartRoutes);
app.use("/pie-chart", pieChartRoutes);
app.use("/combined", combinedRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
