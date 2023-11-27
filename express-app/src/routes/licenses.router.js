const express = require ('express');
const { getAll, getOne } = require ('../controllers/licence.controller');
const router = express.Router();

router.get ('/licenses', getAll);
router.get ('/licence/:id_licence',getOne)

module.exports = router;
