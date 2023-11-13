import axios from "axios";
//USERS
//working api call
//el password debe tener minimo 6 caracteres, el email debe tener formato de email
export const llamarRegisterUser = async (data) => {
  console.log("Pidiendo a la api", data);
  const response = await axios.post(`http://localhost:4000/api/register`, data);
  return response;
};

export const llamarLoginUser = async (data) => {
  console.log("logging in", data);
  const response = await axios.post(`http://localhost:4000/api/login`, data);
  return response;
};

//ITEMS
export const llamarGetAll = async () =>
  // sin brackets porque es una sola linea (el return de la funcion)
  {};

export const llamarGetOne = async (
  id // sin brackets porque es una sola linea (el return de la funcion)
) => {};

export const llamarPostOne = async (
  body // sin brackets porque es una sola linea (el return de la funcion)
) => {};

export const llamarPutOne = async (
  id,
  body // sin brackets porque es una sola linea (el return de la funcion)
) => {};

export const llamarDeleteOne = async (
  id // sin brackets porque es una sola linea (el return de la funcion)
) => {};
