const { conn } = require ('../config/database');

module.exports = {
	getAllProducts: (call) => {
		const query = 'SELECT * FROM product';
		conn.query (query, call);
	}
}
