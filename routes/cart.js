import Router from 'express';
import { getCategoryPoducts, getOneProduct, getSearchPoducts, createManyProducts, getAllPoducts, updateProduct } from '../controller/cardController.js';
const router = new Router()

// http://localhost:1111/product
router.post('/createmany', createManyProducts);

router.get('/all', getAllPoducts);
router.get('/search', getSearchPoducts);
router.get('/category', getCategoryPoducts);
router.get('/card', getOneProduct);

router.put('/update', updateProduct)

export default router  