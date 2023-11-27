const { getAll, getOne } = require('../controllers/Products.controller');
const express = require('express');
const router = express.Router();

router.get('/products', getAll);
router.get('/product/:id_product', getOne);

module.exports = router;
