import Router from 'express';
import { getCategoryPoducts, getOneProduct, getSearchPoducts, postProducts, getAllPoducts } from '../controller/cardController.js';
const router = new Router()

// http://localhost:1111/product
router.post('/', postProducts);

router.get('/all', getAllPoducts);
router.get('/search', getSearchPoducts);
router.get('/category', getCategoryPoducts);
router.get('/card', getOneProduct);

export default router 