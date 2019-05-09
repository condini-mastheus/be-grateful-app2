import axios from 'axios';

const api = axios.create({
  baseURL: 'https://be-grateful-2.firebaseio.com/',
});

export default api;
