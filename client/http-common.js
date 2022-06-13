import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const ax = axios.create(
  Platform.OS === 'ios'
    ? {
        baseURL: 'http://localhost:8080/api', // for web expo
        headers: {
          'Content-type': 'application/json',
        },
      }
    : {
        baseURL: 'http://10.0.2.2:8080/api', // for android emulator
        headers: {
          'Content-type': 'application/json',
        },
      }
);
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
