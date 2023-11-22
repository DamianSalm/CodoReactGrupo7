const express = require ('express');
const { getLicenses } = require ('../controllers/licence.controller');
const router = express.Router();
router.get ('/licenses', getLicenses);

module.exports = router;
