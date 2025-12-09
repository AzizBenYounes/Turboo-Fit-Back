const express = require("express");
const Product = require("../models/Product"); // make sure path is correct

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { category: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    const products = await Product.find(keyword);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
