import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:8080/api", // for web expo
  baseURL: 'http://10.0.2.2:8080/api', // for android emulator
  headers: {
    "Content-type": "application/json",
  },
});
