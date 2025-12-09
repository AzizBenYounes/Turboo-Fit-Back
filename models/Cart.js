import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      image: String,
      size: String,
      qty: Number,
    }
  ]
});

export default mongoose.model("Cart", cartSchema);
