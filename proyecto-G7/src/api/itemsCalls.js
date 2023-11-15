import axios from "axios";

//ITEMS
// sin brackets porque es una sola linea (el return de la funcion)
export const llamarGetAll = async () =>
  await axios.get("http://localhost:4000/api/items/");

export const llamarGetOne = async (id) => {
  await axios.get(`http://localhost:4000/api/items/${id}`);
};

export const llamarPostOne = async (body) => {
  await axios.post("http://localhost:4000/api/items/", body);
};

export const llamarPutOne = async (body) => {
  await axios.put(`http://localhost:4000/api/items/${body._id}`, body);
};

export const llamarDeleteOne = async (id) => {
  await axios.delete(`http://localhost:4000/api/items/${id}`);
};
