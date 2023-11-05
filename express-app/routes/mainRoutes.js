import { Router } from 'express';
import { getOne } from '../controllers/main.controller.js'

const router = Router();

router.get('/main', getOne);
// router.get('/', getMany);
// router.post('/', postOne);

export default router;