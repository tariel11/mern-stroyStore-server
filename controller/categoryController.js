// import CategoryModel from '../models/categoryModel.js';
// import TestModel from '../models/testModel.js';

// export const categoryCreate =  async (req, res, next) => {
//   try{
//     const {name} = req.body

//     const doc = new CategoryModel({
//       name: name
//     });
  
//     const category = await doc.save()
  
//     res.json(category)
//     } catch(e){
//     console.log(e);
//       res.status(500).json({
//         message: 'Не удалось создать категорию',
//       });
//     }
// }

// export const getCategory = async (rea, res, next) => {
//   try{
//     const categories = await CategoryModel.find().exec();

//     res.json(categories)
//   } catch(e){
//     console.log(e);
//       res.status(500).json({
//         message: 'Не удалось получить категории',
//       });
//     }
// }
// //////

// export const testCreate =  async (req, res, next) => {
//   try{
//     const {name} = req.body

//     const doc = new TestModel({
//       name: name
//     });
  
//     const test = await doc.save()
  
//     res.json(test)
//     } catch(e){
//     console.log(e);
//       res.status(500).json({
//         message: 'Не удалось создать категорию',
//       });
//     }
// }

// export const getTest = async (rea, res, next) => {
//   try{
//     const tests = await TestModel.find().exec();

//     res.json(tests)
//   } catch(e){
//     console.log(e);
//       res.status(500).json({
//         message: 'Не удалось получить категории',
//       });
//     }
// }

import CategorySchema from '../models/categoryModel.js'

export const categoryCreate = async (req, res, next) => {
  try {
    const { name } = req.body

    const doc = new CategorySchema({
      name
    })

    const category = await doc.save()

    res.json(category)
  } catch (e) {
    console.log(e);
      res.status(500).json({
        message: "Не удалось создать категорию"
      })
  }
}

export const categoryGet = async (rea, res, next) => {
  try{
    const categories = await CategorySchema.find().exec();

    res.json(categories)
  } catch(e){
    console.log(e);
      res.status(500).json({
        message: 'Не удалось получить категории',
      });
    }
}