export const validateSchema = (schema) => (req, res, next) => {
  console.log("validando esquema");
  try {
    console.log("headers: ", req.headers);
    console.log("body: ", req.body);
    console.log("files: ", req.files);
    schema.parse(req.body);
    console.log("schema validado");
    next();
  } catch (err) {
    return res.status(400).json(err.errors.map((err) => err.message));
  }
};
