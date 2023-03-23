import SalesSchema from '../models/salesModel.js'

export const createOneSales = async (req, res) => {
  try{
    const newSales = new SalesSchema({title: req.body.title})

    const sales = await newSales.save();
    res.send({ message: 'Акция создана', sales });
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось создать акцию', 
      });
   } 
}

export const getAllSales = async (req, res) => {
  try{
    const sales = await SalesSchema.find()

    res.json(sales);
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось получить акции', 
      });
   } 
}