import axios from "./axiosConf";
//USERS
//working api call
//el password debe tener minimo 6 caracteres, el email debe tener formato de email
export const llamarRegisterUser = (data) => {
  const response = axios.post("/register", data);
  return response
};

export const llamarLoginUser = (data) => {
  // console.log("logging in", data);
  const response = axios.post(`/login`, data);
  return response;
};

export const llamarLogout = () => {
  const response = axios.post("/logout");
  return response;
};

export const llamarVerifyToken = () => axios.post(`/auth/verify`);
