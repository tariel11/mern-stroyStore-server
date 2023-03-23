import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);


export default mongoose.model('Brand', BrandSchema);