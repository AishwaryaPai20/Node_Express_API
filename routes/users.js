import express from 'express';

import { createUser, getUsers, getUserId, deleteUser, updateUser } from '../controllers/users.js';
const router = express.Router();

let users = [
    {
        "firstName": "Aishwarya",
        "lastName": "Pai",
        "Age": 19
    },
]

//all routes are starting with /users
router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUserId)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)
export default router;