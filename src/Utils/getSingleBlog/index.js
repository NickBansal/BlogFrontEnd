import axios from 'axios';

const URL = 'https://backendblog.herokuapp.com/blogs';

export default async (blogId) => {
  const { data } = await axios.get(`${URL}/${blogId}`);
  return data;
};
