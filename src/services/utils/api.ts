import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: `${Config.API_URL}/api/v1`,
});

export default api;
