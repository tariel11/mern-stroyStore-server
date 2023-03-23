import Router  from 'express';
const router = new Router()

import product from './productRoute.js';
import order from './orderRoute.js';

router.use('/products', product)
router.use('/orders', order) 


export default router