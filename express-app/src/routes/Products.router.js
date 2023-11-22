const { getProducts } = require('../controllers/Products.controller');
const express = require('express');
const router = express.Router();

router.get('/products', getProducts);

module.exports = router;
