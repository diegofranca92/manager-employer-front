import Axios, { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_API_URL

// const headerMain = {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${localStorage.getItem('@Auth:token')}`,
// };
const headerMain = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5ODk4ODEyLCJpYXQiOjE2ODk4ODgwMTIsImp0aSI6IjFlZTgzNTI4NjMyNjQ1MDY5N2Y5YWFlODBlNzAyMDQwIiwidXNlcl9pZCI6MX0.AV_02g1HheaV-CqR2Fa0hhco6L98ddlVzrKWqsE3d9Y`,
};

const api: AxiosInstance = Axios.create({
  baseURL,
  headers: headerMain,
})

export default api;
  
