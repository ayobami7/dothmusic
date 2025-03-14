import express from 'express';
import { getUser, getUsers, createUser, updateUser, deleteUser } from '../controllers/userControllers';

const router = express.Router();

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:id', getUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router;