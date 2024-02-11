import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST ?? "http://localhost:8080",
});

export default axiosInstance;