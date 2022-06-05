import axios from 'axios';
import { Platform } from 'react-native';

export default axios.create({
  baseURL: Platform.OS === 'ios' ? 'http://localhost:8080/api' : 'http://10.0.2.2:8080/api', // for web expo / ios
  // baseURL: 'http://10.0.2.2:8080/api', // for android emulator
  headers: {
    'Content-type': 'application/json',
  },
});
