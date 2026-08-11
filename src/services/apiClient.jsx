import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (request) => request,
  (err) => err,
);

apiClient.interceptors.response.use(
  (response) => response,
  (err) => {

    return Promise.reject(err);
  },
);
