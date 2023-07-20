import Axios, { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_API_URL

const headerMain = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('@Auth:token')}`,
};

const api: AxiosInstance = Axios.create({
  baseURL,
  headers: headerMain,
  withCredentials: true,
})

export default api;
  
