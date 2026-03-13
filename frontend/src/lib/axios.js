import axios from "axios";

// React requires environment variables to start with REACT_APP_
// Remove dotenv — it doesn't work in the frontend

// Use REACT_APP_BACKEND_URL for production (Vercel) and fallback to localhost in dev
const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001/api";
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;