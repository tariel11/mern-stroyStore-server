import Router from 'express';
const router = new Router()
import TestSchema from '../models/test.js'


// http://localhost:1111/product
router.post('/', (req, res) => {
  try{
    req.body.map((obj)=>{
     const doc = new TestSchema({
      title: obj.title,
      price: obj.price, 
      img: obj.img,
      category: obj.category
     });
   
     const product = doc.save()
   })

  res.json({message: "success"})
 } catch(e){
  console.log(e);
    res.status(500).json({
      message: 'Не удалось создать статью', 
    });
 }
});

router.get('/', async (req, res) => {
  try{
    const products = await TestSchema.find().exec();
  res.json(products)
 } catch(e){
  console.log(e);
    res.status(500).json({
      message: 'Не удалось создать статью', 
    });
 }
});

export default router 