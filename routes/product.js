import Router from 'express';
import { getAllPoducts, getCategoryPoducts, getOneProduct, getSearchPoducts, postProduct } from '../controller/productController.js';
const router = new Router()

// http://localhost:1111/product
router.post('/', postProduct);

router.get('/all', getAllPoducts);
router.get('/search', getSearchPoducts);
router.get('/category', getCategoryPoducts);
router.get('/card', getOneProduct);

export default router 