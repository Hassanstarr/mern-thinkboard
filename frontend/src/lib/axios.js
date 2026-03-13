import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

const BASE_URL = process.env.BACKEND_URL ||  "http://localhost:5001/api";
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;