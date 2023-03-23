import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
    },
    article: {
      type: String,
      require: true,
      minlength: [6, "Артикул должен быть из 6 символов"],
      maxlength: [6, "Артикул должен быть из 6 символов"]
    },
    price: {
      type: Number,
      require: true,
    },
    oldPrice: {
      type: Number,
      default: 0
    },
    category: {
      type: String,
      require: true
    },
    img: {
      type: String,
      require: true
    },
    cardInfo: {
      type: Array,
      default: []
    },
    description: {
      type: Array,
      default: []
    },
    sales: {
      type: String,
      default: ''
    },
    brand: {
      type: String,
      default: ''
    },
    outStock: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  },
);


export default mongoose.model('Product', ProductSchema);