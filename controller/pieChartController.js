// pieChartController.js
const Product = require("./productModel");

async function getPieChartData(req, res) {
  const { month } = req.query;

  try {
    const categoriesData = await Product.aggregate([
      {
        $match: {
          dateOfSale: {
            $gte: new Date(`${month}-01`),
            $lt: new Date(`${month}-31`),
          },
        },
      },
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);

    const pieChartData = categoriesData.map((category) => ({
      [category._id]: category.count,
    }));

    res.json({ success: true, pieChartData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching pie chart data." });
  }
}

module.exports = { getPieChartData };
