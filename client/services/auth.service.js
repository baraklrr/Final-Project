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
        saveUserToLocalStorage(response.data.refreshToken);
      }
      //else logout();
      return response.data;
    });
};
const saveUserToLocalStorage = async (element) => {
  try {
    const jsonValueuser = JSON.stringify(element);
   // const jsonValueToken = JSON.stringify(accessToken);
    await AsyncStorage.setItem("token", jsonValueuser);
    //await AsyncStorage.setItem("token", jsonValueuser);
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
