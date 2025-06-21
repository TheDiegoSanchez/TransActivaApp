import axios from 'axios';
import Constants from 'expo-constants';

const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL;

console.log('API_BASE_URL:', API_BASE_URL);

if (!API_BASE_URL) {
  console.error('API_BASE_URL no definido en el archivo .env');
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
