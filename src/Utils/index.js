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

export const postSingleBlog = async (blog) => {
  console.log(blog);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const { data } = await axios.post(`${URL}/`, blog, config);
  return data;
};

export const deleteSingleBlog = async (blogId) => {
  const { data } = await axios.delete(`${URL}/${blogId}`);
  return data;
};
