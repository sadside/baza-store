import axios from "axios";

export const notAuthApi = axios.create({
  baseURL: 'http://localhost:3000',
})

