const connection = require ('../config/database');

module.exports = {
	getAllCategories: (call) => {
		const query = 'SELECT * FROM category';
		connection.query(query, call);
	}
};
