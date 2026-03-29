import axios from 'axios'

export const axiosAuthInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

axiosAuthInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token') ?? ''} `
  return config
})
