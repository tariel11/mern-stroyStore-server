import OrderModel from '../models/orderModel.js'

export const orderCreate = async (req, res, next) => {
  try {
    const newOrder = new OrderModel({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      itemsPrice: req.body.itemsPrice,
      deliveryPrice: req.body.deliveryPrice,
      totalPrice: req.body.totalPrice,
    });

    const order = await newOrder.save();
    res.status(201).send(order);
  } catch (e) {
    console.log(e);
      res.status(500).json({
        message: "Не удалось создать категорию"
      })
  }
}

export const ordersGetAll = async (req, res, next) => {
  try{
    const orders = await OrderModel.find().exec();
    res.json(orders)
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось получить категории',
      });
    }
}

export const orderGetOne = async (req, res,) => {
  try{
    const {id} = req.params
    const order = await OrderModel.findOne({_id: id});
    res.json(order)
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось получить категории',
      });
    }
}