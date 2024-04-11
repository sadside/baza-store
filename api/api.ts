import axios from "axios";

export const notAuthApi = axios.create({
  baseURL: "https://www.thebaza.ru"
});

