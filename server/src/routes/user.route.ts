/**
 * Specifies the middleware and controller functions to call for each route
 * relating to authentication.
 */
import express from 'express';
import 'dotenv/config';
import { getAllUsers, createUser, editUser, deleteUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/users', getAllUsers);

router.post('/users', createUser);

router.patch('/users/:id', editUser);

router.delete('/users/:id', deleteUser);

export default router;
