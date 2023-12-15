import axios from "./axiosConf";
//USERS
//working api call
//el password debe tener minimo 6 caracteres, el email debe tener formato de email
export const llamarRegisterUser = async (data) => {
  const response = await axios.post("/register", data);
  return response;
};

export const llamarLoginUser = async (data) => {
  // console.log("logging in", data);
  const response = await axios.post(`/login`, data);
  return response;
};

export const llamarLogout = async () => {
  const response = await axios.post("/logout");
  return response;
};

export const llamarVerifyToken = async () =>  await axios.post(`/auth/verify`);
