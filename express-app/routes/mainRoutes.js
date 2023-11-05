import { Router } from 'express';
import { getOne } from '../controllers/main.controller.js'

const router = Router();

// router.get('/main', getAll);
router.get('/main/:id', getOne);
// router.post('/', postOne);

export default router;