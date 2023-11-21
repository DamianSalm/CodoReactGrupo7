const express = require ('express');
const router = express.Router();

const { getCategories } = require ('../controllers/Categories.controller.js');

router.get('/categories', getCategories);

module.exports = router;
