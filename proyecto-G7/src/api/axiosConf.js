import axios from "axios";

const API = 'http://localhost:4000/api'
const ax = axios.create({
  baseURL: API,
  withCredentials: true,
});

export default ax;
