import Router  from 'express';
const router = new Router()
// import categoryRouter from './categoryRouter.js';

import userRouter from './userRouter.js';
import productRouter from './productRouter.js';
import categoryRouter from './categoryRouter.js'
import orderRouter from './orderRouter.js'
import test from './tets.js';

router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/user', userRouter)
router.use('/order', orderRouter)
router.use('/test', test)


export default router