import axios from 'axios';
import { getAllBlogs, getSingleBlog } from '.';

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
});
