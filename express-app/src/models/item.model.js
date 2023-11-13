import { Decimal128, Double, Int32 } from "mongodb";
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  iid: {
    type: String,
    required: true,
    trim: true,
  },
  sku: {
    type: String,
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
    type: String,
  },
  stock: {
    type: String,
  },
  discout: {
    type: String,
  },
  dues: {
    type: String,
  }
}, {
  timestamps: true
});

export default mongoose.model("Item", itemSchema);
