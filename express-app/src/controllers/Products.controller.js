const productsModel = require ('../models/Products.model');

const getAll = async (req, res) => {
	const products = await productsModel.getAll();
	res.send(products);
};

const getOne = async (req, res) => {
	const idProducts = req.params.id_product;
	const oneProduct = await productsModel.getOne(idProducts);
	res.send(oneProduct);
};

module.exports = {
	getAll,
	getOne
};
