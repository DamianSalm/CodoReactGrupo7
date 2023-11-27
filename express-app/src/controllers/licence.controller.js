const licenceModel  = require ('../models/licenceModel');

const getAll = async (req, res) => {
	const licenses = await licenceModel.getAll();
	res.send(licenses);
};

const getOne = async (req, res) => {
	const idLicence = req.params.id_licence;
	const oneLicence = await licenceModel.getOne(idLicence);
	res.send(oneLicence);
};



module.exports = {
	getAll,
	getOne
};
