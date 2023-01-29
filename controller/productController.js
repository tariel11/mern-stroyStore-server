import { v4 as uuidv4 } from 'uuid';
import path  from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import ProductModel from '../models/productModel.js'

export const productCreate =  async (req, res, next) => {
  try{
    const {title, price, categoryId, description} = req.body
    const {img} = req.files
    let fileName = uuidv4() + ".jpg"
    img.mv(path.resolve(__dirname, '..', 'static', fileName));
    
    const doc = new ProductModel({ 
      title,
      price,
      img: fileName,
      categoryId,
      description,
    });
  
    const product = await doc.save()
  
    res.json(product)
    } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось создать статью',
      });
    }
}

export const createMany =  async (req, res) => {
    try{
      req.body.map((obj)=>{
       const doc = new ProductModel({
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
}

export const productGetAll = async (req, res) => {
  try{

    let {title, category} = req.query
  
    let products;
    if(title){
        products = await ProductModel.find({title: { $regex: title, $options: 'i' }});

    } else if(category){
       products = await ProductModel.find({category});
       
  } else {
    products = await ProductModel.find().exec();
  }

    res.json(products);
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось получить продукты',
      });
    }
}

export const productGetOne = async (req, res) => {
  try{
    const {id} = req.params
    const product = await ProductModel.findOne({_id: id});

    return res.json(product)
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось получить продукт',
      });
    }
}
