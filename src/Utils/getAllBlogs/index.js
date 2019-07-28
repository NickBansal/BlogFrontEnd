import axios from 'axios';

const URL = 'https://backendblog.herokuapp.com/blogs';

export default async () => {
  const { data } = await axios.get(`${URL}/`);
  return data;
};
