import Router from 'express';
const router = new Router()
import {productCreate, productGetAll, productGetOne, createMany } from '../controller/productController.js';


// http://localhost:1111/product
router.post('/', productCreate);
router.post('/many', createMany);


router.get('/', productGetAll);
router.get('/:id', productGetOne);

export default router 