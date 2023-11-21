const connection = require('../config/database');

module.exports = {
  getAllLicences: (callback)=>{
    const query = 'SELECT * FROM licence';
    connection.query(query,callback);
  }
};
