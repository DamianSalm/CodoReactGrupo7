require ('dotenv').config()
const conn = require ('./config/conn');
const Licenses = require ('./routes/licenses.router');
const Categories = require('./routes/categories.router');
const Products = require('./routes/Products.router');
const { notFound } = require ('./utils/errorsHandler');
const express = require('express');
const app = express();
const port = process.env.PORT;

// Rutas
app.use('/', Licenses);
app.use('/', Categories);
app.use('/', Products);

//Midelwere para ruta no encontrada
app.use(notFound);

// Cerrar conexion a MySQL al cerrar la aplicacion

process.on('SIGINT', () => {
  conn.release();
  process.exit();
});

app.listen(port, () => {
  console.log(`API REST escuchando en http://localhost:${port}`);
});

