import axios from "./axiosConf";

//ITEMS
// sin brackets porque es una sola linea (el return de la funcion)
export const llamarGetAll = async () => await axios.get("http://localhost:4000/api/items/");

export const llamarGetOne = async (id) => await axios.get(`http://localhost:4000/api/items/${id}`);

export const llamarPostOne = async (payload) => await axios.post("http://localhost:4000/api/items/", payload);

export const llamarPutOne = async (id, payload) => await axios.put(`http://localhost:4000/api/items/${id}`, payload);

export const llamarDeleteOne = async (id) => await axios.delete(`http://localhost:4000/api/items/${id}`);

