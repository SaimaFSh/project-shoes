import express from 'express';
import UserController from '../controllers/user.controller.js';
const userRoutes = express.Router();

const userController = new UserController(); 
userRoutes.post('/user/register', userController.register);
userRoutes.post('/user/login', userController.login);
userRoutes.get('/user', userController.retrieve);

export default userRoutes; 