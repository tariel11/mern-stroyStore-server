import OrderSchema from '../models/orderModel.js';

export const createOrder = async (req, res) => {
  try{
    const {name, phone, email, address, comment, totalItems, totalSum, items} = req.body

    const newOrder = new OrderSchema({name, phone, email, address, comment, totalItems, totalSum, items})

    const order = await newOrder.save();
    res.send({ created: true, order });
  } catch(e){
    console.log(e);
      res.status(500).json({ 
         created: false 
      });
   }  
}

export const getAllOrders = async (req, res) => {
  try{
    const {createdDay} = req.query;
    let orders;   

    if(createdDay){   
      orders  = await OrderSchema.find({createdDay})
    } else {
      orders  = await OrderSchema.find()
    }


    res.json(orders);
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось получить заказы', 
      });
   } 
}

export const getOneOrder = async (req, res) => {
  try{
    const {id} = req.query
    console.log(id);
    const order  = await OrderSchema.findOne({_id :id})

    res.json(order);
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось получить заказ', 
      });
   } 
} 