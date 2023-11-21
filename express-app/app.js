const express = require('express');
const Licenses = require ('./routes/licenses.router');
const Categories = require('./routes/categories.router');
const app = express();
const port = 3000;


app.use(Licenses);
app.use(Categories);

// Cerrar conexion a MySQL al cerrar la aplicacion
/*
process.on('SIGINT', () => {
  connection.end();
  process.exit();
});
*/
app.listen(port, () => {
  console.log(`API REST escuchando en http://localhost:${port}`);
});

