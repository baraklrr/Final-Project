import http from "../http-common";
import AsyncStorage from "@react-native-async-storage/async-storage";

const register = (username, email, password) => {
  return http.post("/signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return http
    .post("/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        saveUserToLocalStorage(response.data);
      }
      //  else logout();
      return response.data;
    });
};
const saveUserToLocalStorage = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("user", jsonValue);
  } catch (e) {
    // save error
  }

  console.log("Done.");
};

const logout = async () => {
  try {
    await AsyncStorage.removeItem("user");
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
