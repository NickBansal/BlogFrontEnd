import axios from 'axios';
import deleteSingleBlog from '.';

jest.mock('axios');

describe('Testing all the API axios calls', () => {
  it('deleteSingleBlog', async () => {
    axios.delete.mockResolvedValue({ data: 'Test' });
    deleteSingleBlog('blog_id')
      .then((data) => {
        expect(axios.delete).toBeCalledWith('https://backendblog.herokuapp.com/blogs/blog_id');
        expect(data).toEqual('Test');
      });
  });
});
