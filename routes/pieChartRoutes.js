// routes/pieChartRoutes.js
const express = require("express");
const pieChartController = require("../controllers/pieChartController");

const router = express.Router();

router.get("/pie-chart", pieChartController.getPieChartData);

module.exports = router;
