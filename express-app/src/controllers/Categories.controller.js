const categoriesModel = require ('../models/Categories.model');

const getAll = async (req, res) => {
	const categories = await categoriesModel.getAll();
	res.send(categories);
};

module.exports = {
	getAll
};
