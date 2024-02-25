// statisticsController.js
const Product = require("./productModel");

async function getStatistics(req, res) {
  const { month } = req.query;

  try {
    const totalSaleAmount = await Product.aggregate([
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
          _id: null,
          totalSaleAmount: { $sum: "$price" },
          totalSoldItems: { $sum: 1 },
          totalNotSoldItems: {
            $sum: { $cond: [{ $eq: ["$dateOfSale", null] }, 1, 0] },
          },
        },
      },
    ]);

    res.json({ success: true, ...totalSaleAmount[0] });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching statistics." });
  }
}

module.exports = { getStatistics };
