import axios from 'axios';
import {
  getAllBlogs, getSingleBlog, postSingleBlog, deleteSingleBlog,
} from '.';

jest.mock('axios');

describe('Testing all the API axios calls', () => {
  afterEach(() => {
    axios.get.mockClear();
  });
  it('getAllBlogs', async () => {
    axios.get.mockResolvedValue({ data: 'Test' });
    getAllBlogs()
      .then((data) => {
        expect(axios.get).toBeCalledWith('https://backendblog.herokuapp.com/blogs/');
        expect(data).toEqual('Test');
      });
  });
  it('getSingleBlog', async () => {
    axios.get.mockResolvedValue({ data: 'Test' });
    getSingleBlog('test_id')
      .then((data) => {
        expect(axios.get).toBeCalledWith('https://backendblog.herokuapp.com/blogs/test_id');
        expect(data).toEqual('Test');
      });
  });
  it('postSingleBlog', async () => {
    const blogData = {
      title: 'Title',
      image: 'Image.jpg',
      body: 'Body',
      label: 'Label',
    };
    axios.post.mockResolvedValue({ data: 'Test' });
    postSingleBlog(blogData)
      .then((data) => {
        expect(axios.post).toBeCalledWith('https://backendblog.herokuapp.com/blogs/', blogData);
        expect(data).toEqual('Test');
      });
  });
  it('deleteSingleBlog', async () => {
    axios.delete.mockResolvedValue({ data: 'Test' });
    deleteSingleBlog('blog_id')
      .then((data) => {
        expect(axios.delete).toBeCalledWith('https://backendblog.herokuapp.com/blogs/blog_id');
        expect(data).toEqual('Test');
      });
  });
});
