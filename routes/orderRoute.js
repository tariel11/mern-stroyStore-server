import Router from 'express';
import { createOrder, getAllOrders, getOneOrder } from '../controller/orderController.js';
const router = new Router()

// http://localhost:1111/product
router.post('/create', createOrder);

router.get('/getall', getAllOrders);
router.get('/getone', getOneOrder);

export default router 