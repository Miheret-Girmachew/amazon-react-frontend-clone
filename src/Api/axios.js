import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-f16b.onrender.com",

});

export { axiosInstance };
