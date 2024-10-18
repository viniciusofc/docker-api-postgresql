import { Router } from 'express';
import * as userController from '../controller/userController';
import { authMiddleware } from '../middleware/middleware';

export const router = Router();

router.get('/all/users', userController.getAllUserController);
router.get('/user/:id', userController.getUserByIdController);

router.post('/create/user', authMiddleware, userController.createUserController);
router.delete('/delete/user/:id', authMiddleware, userController.deleteUserByIdController);
