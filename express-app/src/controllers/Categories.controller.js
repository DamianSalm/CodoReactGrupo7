const CategoryModel = require ('../models/Categories.model');

module.exports = {
	getCategories: (req, res) => {
		CategoryModel.getAllCategories((err, results) => {
			if (err) {
				console.log(`Error al obtener Categorias: ${err}`)
		  	    res.status(500).send('Error interno en el servidor')
		  	} else {
		  		res.json(results);
		  	}
		});
	}
};
