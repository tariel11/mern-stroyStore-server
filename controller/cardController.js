import CardtSchema from '../models/card.js'


export const postProducts = async (req, res) => {
  try{
    req.body.map((obj)=>{
     const doc = new CardtSchema({
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
    const {category} = req.query
    const products = await CardtSchema.find().exec();

    const sortedProducts = products.filter(item => item.category === category)
 
    res.json(sortedProducts)
 } catch(e){
  console.log(e);
    res.status(500).json({
      message: 'Не удалось создать статью', 
    });
 }
}