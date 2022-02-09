import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api-make-your-burger.herokuapp.com/'
})