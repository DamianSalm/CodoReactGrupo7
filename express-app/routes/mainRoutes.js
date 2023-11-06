import { Router } from 'express';
import { getAll, getOne, postOne, editOne, deleteOne } from '../controllers/main.controller.js'

const router = Router();

// rutas CRUD a las funciones del controlador
router.get('/main', getAll);
router.get('/main/:id', getOne);
router.post('/main/', postOne);
router.put('/main/:id', editOne);
router.delete('/main/:id', deleteOne);

// EXPORT
export default router;