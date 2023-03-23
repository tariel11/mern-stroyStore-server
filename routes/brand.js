import Router from 'express';
import { createOneBrand, getAllBrand } from '../controller/brandController.js';
const router = new Router()

// http://localhost:1111/product
router.post('/createone', createOneBrand);

router.get('/getall', getAllBrand);

export default router 