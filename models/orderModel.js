import mongoose from "mongoose";
import moment from "moment";

const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      default: ''
    },
    totalItems: {
      type: Number,
      require: true,
    },
    totalSum: {
      type: Number,
      require: true,
    },
    items: {
      type: Array,
      require: true,
    },
    createdDay: {
      type: String,
      default: moment().format('L')
    },
    createdTime: {
      type: String,
      default: moment().format('LT')
    },
  },
);


export default mongoose.model('Order', OrderSchema);