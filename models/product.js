import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    category: String,
    img: String,
  },
  {
    timestamps: true,
  },
);


export default mongoose.model('Product', ProductSchema);