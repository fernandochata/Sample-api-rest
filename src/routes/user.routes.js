import { Router} from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser, deleteUsers } from '../controllers/User.controllers.js';


const router = Router();

router.get('/:id', getUser);

router.get('/', getUsers);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.delete('/', deleteUsers);

export default router;
