import Router  from 'express';
const router = new Router()

import product from './product.js';

router.use('/products', product)


export default router