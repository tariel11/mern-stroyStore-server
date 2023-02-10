import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
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


export default mongoose.model('Test', TestSchema);