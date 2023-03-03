import axios from "axios";

const endpoint = axios.create({
  baseURL: "https://dummyjson.com/",
});

export default endpoint;
