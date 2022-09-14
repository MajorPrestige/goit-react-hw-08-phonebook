import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/users';

export const axiosSignup = async userData => {
  const { data } = await axios.post('/signup', userData);
  return data;
};
