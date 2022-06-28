import axios from "axios";

export const api = axios.create({
  baseURL: "http://3.80.70.137:49154/facilita-api",
});
