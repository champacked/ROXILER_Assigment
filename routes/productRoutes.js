// routes/productRoutes.js
const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/initialize-database", productController.initializeDatabase);
router.get("/list-transactions", productController.listTransactions);

module.exports = router;
