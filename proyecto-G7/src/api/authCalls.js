import axios from "./axiosConf";

//USERS
//working api call
//el password debe tener minimo 6 caracteres, el email debe tener formato de email
export const llamarRegisterUser = (data) => {
  // console.log("Pidiendo a la api", data);
  const response = axios.post(`/register`, data);
  return response;
};

export const llamarLoginUser = (data) => {
  // console.log("logging in", data);
  const response = axios.post(`/login`, data);
  return response;
};

export const llamarVerifyToken = (co) => axios.post(`/auth/verify`);

export const llamarLogout = () => {
  const response = axios.post("/logout");
  return response;
};
