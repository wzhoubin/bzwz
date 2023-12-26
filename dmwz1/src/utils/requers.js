import axios from "axios";
let myAxios = axios.create({
  baseURL: "http://localhost:3000"
  // timeout: 5000
});
export default myAxios;
