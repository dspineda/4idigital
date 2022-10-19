import { Router } from 'express';
import { users, photos } from './users.controller';

const router = Router();

router.get('/users', users);
router.get('/users/photos/:id', photos);

export default router;

