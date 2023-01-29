import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        img: { type: String, required: true },
        quantity: { type: Number, required: true },
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true,},
      },
    ],
    shippingAddress: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      tel: { type: String, required: true },
      comment: { type: String, },
      // paymentMethodName: { type: String, required: true },
    },
    itemsPrice: { type: Number, required: true },
    deliveryPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: false }, 
    isDelivered: { type: Boolean, default: false }, 
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;