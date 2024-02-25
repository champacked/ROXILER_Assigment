// barChartController.js
const Product = require("./productModel");

async function getBarChartData(req, res) {
  const { month } = req.query;

  try {
    const priceRanges = [
      { min: 0, max: 100 },
      { min: 101, max: 200 },
      // Add more ranges as needed
    ];

    const barChartData = await Promise.all(
      priceRanges.map(async (range) => {
        const count = await Product.countDocuments({
          dateOfSale: {
            $gte: new Date(`${month}-01`),
            $lt: new Date(`${month}-31`),
          },
          price: { $gte: range.min, $lt: range.max },
        });

        return { range, count };
      })
    );

    res.json({ success: true, barChartData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching bar chart data." });
  }
}

module.exports = { getBarChartData };
