import { Router } from "express";
import { tokenRequired } from "../middlewares/validateToken.js";
import { getAll, getOne, postOne, putOne, deleteOne } from '../controllers/item.controller.js'
import { validateSchema } from "../middlewares/validateFields.js";
import { createItemSchema, updateItemSchema } from "../schemas/item.schema.js";

const router = Router();

router.get('/', getAll)
router.get('/item/:id', getOne)
router.post('/item', tokenRequired, validateSchema(createItemSchema), postOne)
router.put('/item/:id', tokenRequired, validateSchema(updateItemSchema), putOne)
router.delete('/item/:id', tokenRequired, deleteOne)

export default router;