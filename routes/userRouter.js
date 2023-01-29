import Router from 'express';
const router = new Router()

import { userRegistration, userLogin, userCheck } from '../controller/userController.js';

// import { loginValidation, registerValidation } from '../validations.js';
// import hadleValidationError from '../utils/hadleValidationError.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

router.post('/registration', userRegistration);
router.post('/login', userLogin);
router.get('/check', authMiddleware, userCheck);
 
export default router