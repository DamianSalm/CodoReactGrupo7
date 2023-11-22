require ('dotenv').config()
const Licenses = require ('./routes/licenses.router');
const Categories = require('./routes/categories.router');
const Products = require('./routes/Products.router');
const express = require('express');
const app = express();
const port = process.env.PORT;


app.use(Licenses);
app.use(Categories);
app.use(Products);

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

