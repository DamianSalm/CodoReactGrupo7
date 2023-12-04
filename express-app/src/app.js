require ('dotenv').config()
const conn = require ('./config/conn');
const Licenses = require ('./routes/licenses.router');
const Categories = require('./routes/categories.router');
const Products = require('./routes/Products.router');
const { notFound } = require ('./utils/errorsHandler');
const express = require('express');
const app = express();
const port = process.env.PORT;
//permisos para el consumo del la api
app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');  //reemplazar por el dominio de la aplicacion react
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

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

