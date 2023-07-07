import axios from "axios";

export const notAuthApi = axios.create({
  baseURL: process.env.SERVER_URL,
})

