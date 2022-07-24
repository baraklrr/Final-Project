import http from '../http-common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authHeader from './auth-header';


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
};

const saveUserToLocalStorage = async (myname,data) => {
  try {
    await AsyncStorage.setItem(myname, data);
  } catch (e) {
    // save error
  }

  console.log('Saved.');
};


const logout = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (e) {}
 http.post('/signout')
};

const updateUser = async(data)=>{
 const auth = await authHeader();
 return http.post('/update', data,{ headers: auth })
}


const AuthService = {
  register,
  login,
  logout,
  saveUserToLocalStorage,
  updateUser,
};

export default AuthService;
