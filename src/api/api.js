import { instance } from './auth';

export const axiosGetContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const axiosPostContacts = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};

export const axiosDeleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const axiosCheckContacts = async id => {
  const { data } = await instance.patch(`/srccontacts/${id}/`);
  return data;
};
