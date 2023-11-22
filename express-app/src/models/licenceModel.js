const { conn } = require('../config/database');

module.exports = {
  getAllLicences: (callback)=>{
    const query = 'SELECT * FROM licence';
    conn.query(query,callback);
  }
};
