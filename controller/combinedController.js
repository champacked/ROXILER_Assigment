// combinedController.js
const axios = require("axios");
const productController = require("./productController");
const statisticsController = require("./statisticsController");
const barChartController = require("./barChartController");
const pieChartController = require("./pieChartController");

async function getCombinedData(req, res) {
  const { month } = req.query;

  try {
    const [transactions, statistics, barChart, pieChart] = await Promise.all([
      productController.listTransactions(
        { query: { month } },
        { json: () => {} }
      ),
      statisticsController.getStatistics(
        { query: { month } },
        { json: () => {} }
      ),
      barChartController.getBarChartData(
        { query: { month } },
        { json: () => {} }
      ),
      pieChartController.getPieChartData(
        { query: { month } },
        { json: () => {} }
      ),
    ]);

    res.json({
      success: true,
      transactions: transactions.json(),
      statistics: statistics.json(),
      barChart: barChart.json(),
      pieChart: pieChart.json(),
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching combined data." });
  }
}

module.exports = { getCombinedData };
