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
  const { data } = await axios({
    method: 'post',
    url: `${URL}/`,
    data: blog,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  });
  return data;
};

export const deleteSingleBlog = async (blogId) => {
  const { data } = await axios.delete(`${URL}/${blogId}`);
  return data;
};
