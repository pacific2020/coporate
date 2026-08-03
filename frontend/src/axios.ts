import axios from "axios";

// Base instance configured for Laravel Sanctum SPA authentication
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  withXSRFToken: true, // Auto-extracts XSRF-TOKEN cookie and passes X-XSRF-TOKEN header
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

// Helper to fetch the CSRF cookie prior to state-changing requests (POST, PUT, DELETE)
export const getCsrfCookie = () => api.get("/sanctum/csrf-cookie");

// Specialized helpers targeting /api and /web endpoints
export const apiRoute = axios.create({
  ...api.defaults,
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const webRoute = axios.create({
  ...api.defaults,
  baseURL: `${import.meta.env.VITE_API_URL}/web`,
});

export default api;