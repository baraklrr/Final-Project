import http from '../http-common';
import AsyncStorage from '@react-native-async-storage/async-storage';

const register = (username, email, password) => {
  return http.post('/auth/signup', {
    username: username,
    email: email,
    password: password,
  });
};

const login = (username, password) => {
  return http
    .post('/auth/signin', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        saveUserToLocalStorage(response.data);
      }
      //else logout();
      return response.data;
    });
};
const saveUserToLocalStorage = async (loginResData) => {
  try {
    await AsyncStorage.setItem('token', loginResData.accessToken);
    await AsyncStorage.setItem('refreshToken', loginResData.refreshToken);
    //await AsyncStorage.setItem("token", jsonValueuser);
  } catch (e) {
    // save error
  }

  console.log('Saved.');
};

const logout = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (e) {
    // remove error
  }

  console.log('Done.');
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
