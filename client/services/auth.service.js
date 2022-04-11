import axios from "axios";
import http from "../http-common";

const register = (username, email, password) => {
  return axios.post("/signup", {
    username,
    email,
    password
  });
};

const login = (username, password) => {
  return http.post("/signin", {
    username : "alon",
    password : "123456"
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
