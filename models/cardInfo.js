import mongoose from "mongoose";

const CardInfo = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    }
  },
  {
    timestamps: true,
  },
);


export default mongoose.model('CardInfo', CardInfo);