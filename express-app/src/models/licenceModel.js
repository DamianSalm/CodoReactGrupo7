const { conn } = require('../config/conn');

const getAll = async () => {
	try {
		const [rows] = await conn.query("SELECT * FROM licence");
		return rows;
	} catch (err) {
		throw err;
	} finally {
		conn.releaseConnection();
	}
};

const getOne = async (id_licence) => {
	try {
		const [rows] = await conn.query('SELECT * FROM licence WHERE licence_id = ?', id_licence);
		return rows;
	} catch (err) {
		throw err;
	} finally {
		conn.releaseConnection();
	}
};


module.exports = {
	getAll,
	getOne

};
