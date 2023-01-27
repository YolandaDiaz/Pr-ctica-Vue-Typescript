import axios, { AxiosHeaders } from "axios";

const YoliApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

YoliApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') ?? '';
  if(token) {
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
  }
  return config;
});

export default YoliApi;