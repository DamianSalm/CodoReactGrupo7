let express = require ('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	res.send('Hola Mundo, desde un servidor Node Js');
});

module.exports = router;
