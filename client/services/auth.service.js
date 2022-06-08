import http from "../http-common";
import AsyncStorage from "@react-native-async-storage/async-storage";

const register = (username, email, password) => {
  return http
  .post("/auth/signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return http
    .post("/auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        saveUserToLocalStorage(response.data.username , response.data.accessToken,response.data.email,response.data.phoneNumber);
      }
      //else logout();
      return response.data;
    });
};
const saveUserToLocalStorage = async (data1,data2,data3,data4) => {
  try {
    const jsonValueToken = JSON.stringify(data2);
    await AsyncStorage.setItem("token", jsonValueToken);
    await AsyncStorage.setItem("username", data1);

  } catch (e) {
    // save error
  }

  console.log("Saved.");
};

const logout = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};


const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
