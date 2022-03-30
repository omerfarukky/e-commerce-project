import axios from "axios";

export const appAxios = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "multipart/form-data",
    'Authorization': 'Bearer '+localStorage.getItem("token")
}
});

