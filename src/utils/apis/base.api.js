import axios from 'axios';

import { API_URL } from '../../config/api';

export const auth = axios.create({
  baseURL: `${API_URL}/core/auth`
});

export const account = axios.create({
  baseURL: `${API_URL}/core/account`
});

account.interceptors.request.use(config => {
  // const token = getCookie('token');
  const token = localStorage.getItem('token');

  if (token) {
    // eslint-disable-next-line
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});