import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const axiosSignup = async userData => {
  const { data } = await instance.post('/users/signup', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.token}`;
  return data;
};

export const axiosLogin = async userData => {
  const { data } = await instance.post('/users/login', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.token}`;
  return data;
};

export const axiosLogout = async () => {
  const { data } = await instance.post('/users/logout');
  instance.defaults.headers.Authorization = null;
  return data;
};

export const axiosCurrent = async token => {
  try {
    instance.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await instance.get('users/current');
    return data;
  } catch (error) {
    instance.defaults.headers.Authorization = `Bearer ${null}`;
    throw error;
  }
};
