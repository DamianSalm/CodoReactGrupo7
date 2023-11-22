const licenceModel = require ('../models/licenceModel');

module.exports = {
  getLicenses: (req, res) => {
    licenceModel.getAllLicences((err, results)=>{
      if (err) {
        console.error(`Error al obtener licencias: ${err}`);
        res.status(500).send('Error interno en el servidor');
      } else {
        res.json(results);
      }
    });
  }
};
