import CardtSchema from '../models/card.js'
import { uuid } from 'uuidv4';
import path from 'path'
import slug from 'slug';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// POST
export const createManyProducts = async (req, res) => {
  try{
    req.body.map((obj)=>{
     const doc = new CardtSchema({
      title: obj.title,
      slug: slug(obj.title),
      article: obj.article, 
      price: obj.price, 
      oldPrice: obj.oldPrice, 
      category: obj.category,
      img: obj.img,
      cardInfo: obj.cardInfo,
      description: obj.description,
      sales: obj.sales,
      brand: obj.brand,
      outStock: obj.outStock,
     });
     const product = doc.save()
   })

  res.json({message: "Товары успешно добавлены"})
 } catch(e){
  console.log(e);
    res.status(500).json({
      message: 'Что то пошло не так, найди ошибку и попробуй занаво', 
    });
 }
}

// GET
export const getAllPoducts = async (req, res) => {
  try{
    const {category, brand, searchQuery, sales} = req.query 
    let products = []

    if(searchQuery){
       products = await CardtSchema.find({
        $or: [
          {title: 
            {
              $regex: searchQuery,
              $options: 'i',
            },
          },
          {article: 
            {
              $regex: searchQuery,
              $options: 'i',
            },
          },
        ]
        
      })
    }  
    if(category){
      products = await CardtSchema.find({category})
    }
    if(brand){
      products = await CardtSchema.find({brand})
    }
    if(sales){
      products = await CardtSchema.find({sales}) 
    }
    res.json(products)
 } catch(e){
  console.log(e);
    res.status(500).json({
      message: 'Не удалось создать статью', 
    });
 }
}

export const getSearchPoducts = async (req, res) => {
  try{
    const {searchQuery} = req.query
    const products = await CardtSchema.find().exec();

    const sortedProducts = products.filter(item => item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
 
    res.json(sortedProducts)
 } catch(e){
  console.log(e);
    res.status(500).json({
      message: 'Не удалось создать статью', 
    });
 }
}

export const getCategoryPoducts = async (req, res) => {
  try{
    const {category} = req.query // получаем какую то категорию

    const products = await CardtSchema.find({category: { $all: [category] }}).exec();

    // const sortedProducts = products.filter(item => item.category === category)
 
    res.json(products)
 } catch(e){
  console.log(e);
    res.status(500).json({
      message: 'Не удалось создать статью', 
    });
 }
}

export const getOneProduct = async (req, res) => {
  try{
    const {title, productArt} = req.query
    let product
    if(title){
      product = await CardtSchema.findOne({title})
    }
    if(productArt){
       product = await CardtSchema.findOne({article: productArt})
    }
    res.json(product)
 } catch(e){
  console.log(e);
    res.status(500).json({
      message: 'Не удалось создать статью', 
    });
 }
}

// PUT
export const updateProduct = async (req, res) => {
  try {
    const {productId} = req.body;
    const product = await CardtSchema.findById(productId);
    if (product) {
      product.title = req.body.title;
      product.slug = slug(req.body.title);
      product.price = req.body.price;
      product.oldPrice = req.body.oldPrice;
      product.article = req.body.article;
      product.description = req.body.description;
      product.cardInfo = req.body.cardInfo;
      product.sales = req.body.sales;
      product.brand = req.body.brand; 
      product.outStock = req.body.outStock; 
      await product.save();
      res.send({ message: 'Product Updated', product });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось создать статью', 
      });
   }
}