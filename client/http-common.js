import axios from 'axios';
import { Platform } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ax = axios.create({
  baseURL: "http://localhost:8080/api", // for web expo
  //baseURL: 'http://192.168.100.249:8080/api',
  headers: {
    'Content-type': 'application/json',
  },
});
// ax.interceptors.response.use(async (res) => {
//   if (res.status == 401 && res.data?.errorCode == '190') {
//     try {
//       const refreshToken = await AsyncStorage.getItem('refreshToken');
//       const refreshRes = await ax.post('/auth/refreshToken', { refreshToken });
//       await AsyncStorage.setItem('token', refreshRes.data.accessToken);
//       await AsyncStorage.setItem('refreshToken', refreshRes.data.refreshToken);
//     } catch (e) {
//       console.log(e);
//       // save error
//     }
//   }
// });

export default ax;
