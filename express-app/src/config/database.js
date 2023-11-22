require('dotenv').config()
const mysql = require ('mysql2');

const pool = mysql.createPool ({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port:3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err) => {
  err 
  ? console.log(`Error al conectarse a MySQL: ${err}`)
  : console.log('Conexión exitosa a MySQL');
});


module.exports = {
	conn: pool
};
