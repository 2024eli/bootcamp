/**
 * Specifies the middleware and controller functions to call for each route
 * relating to authentication.
 */
import express from 'express';
import 'dotenv/config';
import { getAllUsers, createUser, editUser, deleteUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/', getAllUsers);

router.post('/create', createUser);

router.patch('/:id', editUser);

router.delete('/:id', deleteUser);

export default router;
