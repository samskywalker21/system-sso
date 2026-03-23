import axios from 'axios'

const axiosAuthInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

axiosAuthInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token') ?? ''}`
  return config
})

export default axiosAuthInstance
