import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema(
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


export default mongoose.model('Sales', SalesSchema);