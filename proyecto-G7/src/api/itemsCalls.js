import ax from "./axiosConf";

//ITEMS
// sin brackets porque es una sola linea (el return de la funcion)
export const llamarGetAll = async () => await ax.get("http://localhost:4000/api/items/");

export const llamarGetOne = async (id) => await ax.get(`http://localhost:4000/api/items/${id}`);

export const llamarPostOne = async (payload) => await ax.post("http://localhost:4000/api/items/", payload, {headers:{"Content-Type":"multipart/form-data"}});

export const llamarPutOne = async (id, payload) => await ax.put(`http://localhost:4000/api/items/${id}`, payload);

export const llamarDeleteOne = async (id) => await ax.delete(`http://localhost:4000/api/items/${id}`);

