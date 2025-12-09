// server/routes/cart.js
import express from "express";
import Cart from "../models/Cart.js";
const router = express.Router();

// Save cart
router.post("/", async (req, res) => {
  const { userId, items } = req.body;
  let cart = await Cart.findOne({ user: userId });
  if (cart) {
    cart.items = items;
  } else {
    cart = new Cart({ user: userId, items });
  }
  await cart.save();
  res.json(cart);
});

// Get cart
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ user: req.params.userId });
  res.json(cart || { items: [] });
});

export default router;

