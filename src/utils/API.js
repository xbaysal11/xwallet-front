import axios from "axios";

const API = axios.create({
  // timeout: 5000,
});

API.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    let token = JSON.parse(localStorage.getItem("token"));
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default API;
