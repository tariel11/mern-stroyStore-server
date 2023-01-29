import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      // required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    img: String,
  },
  {
    timestamps: true,
  },
);


export default mongoose.model('Product', ProductSchema);