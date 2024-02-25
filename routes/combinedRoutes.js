// routes/combinedRoutes.js
const express = require("express");
const combinedController = require("../controllers/combinedController");

const router = express.Router();

router.get("/combined-api", combinedController.getCombinedData);

module.exports = router;
