import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "http://localhost:5001/api";
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;