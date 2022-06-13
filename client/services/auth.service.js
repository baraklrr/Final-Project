import http from '../http-common';
import AsyncStorage from '@react-native-async-storage/async-storage';

const register = (username, email, password) => {
  return http.post('/auth/signup', {
    username: username,
    email: email,
    password: password,
  });
};

const login = async (username, password) => {
  return http.post('/auth/signin', {
    username,
    password,
  });
  // .then((response) => {
  //   if (response?.data?.accessToken) {
  //     console.log('inside then');
  //     return saveUserToLocalStorage(
  //       response.data.username,
  //       response.data.accessToken,
  //       response.data.email,
  //       response.data.phoneNumber
  //     );
  //   }
  //   return response?.data;
  // })
  // .catch((err) => {
  //   console.log('error: ' + err);
  //   console.log('user not exist');
  // });
};
const saveUserToLocalStorage = async (data1, data2, data3, data4) => {
  try {
    const jsonValueToken = data2; //JSON.stringify(data2);
    await AsyncStorage.setItem('token', jsonValueToken);
    await AsyncStorage.setItem('username', data1);
    await AsyncStorage.setItem('email', data3);
    await AsyncStorage.setItem('phone', data4);
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
  saveUserToLocalStorage,
};

export default AuthService;
