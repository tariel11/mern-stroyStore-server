import Router from 'express';
import { createOneSales, getAllSales } from '../controller/salesController.js';
const router = new Router()

// http://localhost:1111/product
router.post('/createonesales', createOneSales);

router.get('/getall', getAllSales);

export default router 