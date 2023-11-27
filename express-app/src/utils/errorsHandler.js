const path = require ('path'); 

module.exports = {
  notFound: (req, res, next) => {
    let rut = req.path;
    res.status(404).send(`La ruta ${rut} no existe`);
  },
  serverError: (req, res, next) => {
    res.status(500).send("El servidor que trae la respiesta no funciona");
  }
};
