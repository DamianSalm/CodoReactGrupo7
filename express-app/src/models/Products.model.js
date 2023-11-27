const { conn } = require ('../config/conn');

const getAll = async () => {
	try {
		const [rows] = await conn.query('SELECT * FROM product');
		return rows;
	} catch (err) {
		throw err;
	} finally {
		conn.releaseConnection();
	}
};

const getOne = async (id_category) => {
	try {
		const [rows] = await conn.query('SELECT * FROM product WHERE product_id = ?', id_category);
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
}
