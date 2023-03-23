import BrandSchema from '../models/brand.js'

export const createOneBrand = async (req, res) => {
  try{
    const newBrand = new BrandSchema({title: req.body.title})

    const brand = await newBrand.save();
    res.send({ message: 'Бренд создан', brand });
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось создать статью', 
      });
   } 
}

export const getAllBrand = async (req, res) => {
  try{
    const brands = await BrandSchema.find()

    res.json(brands);
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось создать статью', 
      });
   } 
}

