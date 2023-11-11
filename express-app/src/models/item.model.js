import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  iid: {
    type: String,
    required: true,
    trim: true,
  },
  sku: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  img_front: {
    type: String,
  },
  img_back: {
    type: String,
  },
  category: {
    type: String,
  },
  licente: {
    type: String,
  },
  price: {
    type: BigInt,
  },
  stock: {
    type: BigInt,
  },
  discout: {
    type: BigInt,
  },
  dues: {
    type: BigInt,
  }
}, {
  timestamps: true
});

export default mongoose.model("Item", itemSchema);
