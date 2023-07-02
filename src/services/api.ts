import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export type ApiResult<T> = {
  data?: T;
  error?: boolean;
};

export default api;
