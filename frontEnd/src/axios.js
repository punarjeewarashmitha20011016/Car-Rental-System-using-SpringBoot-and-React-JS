import axios from "axios";
import { baseUrl } from "./baseUrl";

export const instance = axios.create({
  baseURL: baseUrl,
});
