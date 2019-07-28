import axios from 'axios';
import getAllBlogs from '.';

jest.mock('axios');

describe('Testing the getAllBlogs API axios call', () => {
  it('getAllBlogs', async () => {
    axios.get.mockResolvedValue({ data: 'Test' });
    getAllBlogs()
      .then((data) => {
        expect(axios.get).toBeCalledWith('https://backendblog.herokuapp.com/blogs/');
        expect(data).toEqual('Test');
      });
  });
});
