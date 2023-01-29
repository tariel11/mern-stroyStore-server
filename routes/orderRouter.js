import Router from 'express';
const router = new Router()

import { orderCreate, ordersGetAll, orderGetOne } from '../controller/orderController.js';

router.post('/', orderCreate);
router.get('/', ordersGetAll);
router.get('/:id', orderGetOne);

export default router
 