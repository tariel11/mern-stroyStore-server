import Router  from 'express';
const router = new Router()

import product from './product.js';
import cart from './cart.js';

router.use('/products', product)
router.use('/tests', cart) 


export default router