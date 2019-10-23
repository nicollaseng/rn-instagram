import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// URL
const url = `https://insert_api_url.com/`;

const api = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout: 35000,
});

api.interceptors.request.use(
  async config => {
    const tokenClient = await AsyncStorage.getItem('@tokenClient');
    config.headers.Authorization = tokenClient;

    return config;
  },
  response => Promise.reject(response),
);

const saveToken = async (newToken: any) => {
  await AsyncStorage.setItem('@tokenClient', newToken.accessToken);
};

const destroyToken = () => {
  AsyncStorage.removeItem('@tokenClient');
};

export default api;

export {url, saveToken, destroyToken};
