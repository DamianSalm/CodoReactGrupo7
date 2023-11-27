const { conn } = require ('../config/conn');

const getAll = async() => {
	try {
		const [rows] = await conn.query('SELECT * FROM category');
		return rows;
	} catch (err) {
		throw err;
	} finally {
		conn.releaseConnection();
	}
};

module.exports = {
	getAll
};
