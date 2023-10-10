import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const mockBaseConfig: AxiosRequestConfig = {
  baseURL: '/mockApi',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
}

export const mockInstance = axios.create(mockBaseConfig)
