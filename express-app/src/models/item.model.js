import { Decimal128 } from "mongodb";
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
    unique: true
  },
  name: {
    type: String,
    required: true,
    trip: true,
    unique: true
  },
  description: {
    type: String,
  },
  img_front: {
    data: Buffer,
    contentType: String
},
  img_back: {
    data: Buffer,
    contentType: String
},
  category: {
    type: String,
  },
  licence: {
    type: String,
  },
  price: {
    type: Decimal128,
  },
  stock: {
    type: Number,
  },
  discout: {
    type: Decimal128,
  },
  dues: {
    type: String,
  }
}, {
  timestamps: true
});

export default mongoose.model("Item", itemSchema);
