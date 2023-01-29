// import Router from 'express';
// const router = new Router()
// import { categoryCreate, getCategory } from '../controller/categoryController.js';


// // http://localhost:1111/category
// router.post('/', categoryCreate);
// router.get('/', getCategory);

// export default router


import Router from 'express';
const router = new Router()

import { categoryCreate, categoryGet} from '../controller/categoryController.js';

router.post('/', categoryCreate);
router.get('/', categoryGet);

export default router
