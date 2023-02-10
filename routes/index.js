import Router  from 'express';
const router = new Router()

import card from './cart.js';

router.use('/products', card)


export default router