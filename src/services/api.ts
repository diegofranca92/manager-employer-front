import Axios, { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_API_URL

// const headerMain = {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${localStorage.getItem('@Auth:token')}`,
// };
const headerMain = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5ODgxNDEwLCJpYXQiOjE2ODk4NzA2MTAsImp0aSI6IjIyNWEyZWQ2NTBhNzQ0OWViOWIzNTJkM2Q0MDk0NjU0IiwidXNlcl9pZCI6MX0.TOPgtZoPm32o9in6ruHLziLdyZ1CKSmlrCnyuI5Xhrg`,
};

const api: AxiosInstance = Axios.create({
  baseURL,
  headers: headerMain,
})

export default api;
  
