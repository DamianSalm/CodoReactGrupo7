const express = require ('express');
const router = express.Router();

const { getAll } = require ('../controllers/Categories.controller.js');

router.get('/categories', getAll);

module.exports = router;
