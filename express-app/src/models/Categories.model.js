const { conn } = require ('../config/database');

module.exports = {
	getAllCategories: (call) => {
		const query = 'SELECT * FROM category';
		conn.query(query, call);
	}
};
