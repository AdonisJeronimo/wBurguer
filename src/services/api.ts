import axios from 'axios'

import { SnackData } from '../Interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getDesserts = () => api.get<SnackData[]>('/desserts')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')

export default api


