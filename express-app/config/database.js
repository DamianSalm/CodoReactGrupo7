const mysql = require ('mysql2');

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'laboratorio',
  password: 'tu_contraseña',
  database: 'usuarios',
});

connection.connect((err) => {
  err 
  ? console.log(`Error al conectarse a MySQL: ${err}`)
  : console.log('Conexión exitosa a MySQL');
});

module.exports = connection;
