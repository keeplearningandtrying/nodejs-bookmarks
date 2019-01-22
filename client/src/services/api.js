import axios from 'axios'

const axiosConfig = {
  baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000',
  timeout: 30000
}

export const api = axios.create(axiosConfig)
