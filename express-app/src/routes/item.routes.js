import { Router } from "express";
import { getAll, getOne, postOne, putOne, deleteOne } from '../controllers/item.controller.js'

const router = Router();

router.get('/', getAll)
router.get('/item/:id', getOne)
router.post('/item', postOne)
router.put('/item/:id', putOne)
router.delete('/item/:id', deleteOne)

export default router;