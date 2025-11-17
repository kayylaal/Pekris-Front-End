import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const key = import.meta.env.VITE_API_KEY;
    if (key) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${key}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;