// productController.js
const Product = require("./productModel");

async function initializeDatabase(req, res) {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    const seedData = response.data;

    await Product.insertMany(seedData);
    res.json({
      success: true,
      message: "Database initialized with seed data.",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error initializing database." });
  }
}

async function listTransactions(req, res) {
  const { month, page = 1, perPage = 10, searchText = "" } = req.query;

  try {
    const regex = new RegExp(searchText, "i");
    const transactions = await Product.find({
      dateOfSale: {
        $gte: new Date(`${month}-01`),
        $lt: new Date(`${month}-31`),
      },
      $or: [{ title: regex }, { description: regex }, { price: regex }],
    })
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.json({ success: true, transactions });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching transactions." });
  }
}

module.exports = { initializeDatabase, listTransactions };
