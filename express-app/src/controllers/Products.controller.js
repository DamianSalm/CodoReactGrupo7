const { getAllProducts } = require ('../models/Products.model');

module.exports = {
	getProducts: (req, res) => {
		getAllProducts((err, results) => {
			if (err) {
				console.log(`Error al obtener productos: ${err}`);
				res.status(500).send('Error interno en el servidor');
			} else {
				res.json(results);
			}
				
		});
	}
};
