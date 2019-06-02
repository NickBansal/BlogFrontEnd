import axios from 'axios';

const URL = 'https://backendblog.herokuapp.com/blogs';

export const getAllBlogs = async () => {
  const { data } = await axios.get(`${URL}/`);
  return data;
};

export const getSingleBlog = async (blogId) => {
  const { data } = await axios.get(`${URL}/${blogId}`);
  return data;
};
