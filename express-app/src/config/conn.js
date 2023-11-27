require ('dotenv').config();
const mysql = require ('mysql2');
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASS,
    database: process.env.DB,
    port: 3306,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});

pool.getConnection((err) => {
    err
    ? console.log(`Error al conectarse a MySQL: ${err}`)
    : console.log('Conección exitosa a MySQL')
});

module.exports = {
    conn: pool.promise()
}
