import Router from 'express';
import { getCategoryPoducts, getSearchPoducts, postProducts } from '../controller/cardController.js';
const router = new Router()

// http://localhost:1111/product
router.post('/', postProducts);

router.get('/search', getSearchPoducts);
router.get('/category', getCategoryPoducts);

export default router 