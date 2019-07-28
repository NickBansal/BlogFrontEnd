import axios from 'axios';
import getSingleBlog from '.';

jest.mock('axios');

describe('Testing all the API axios calls', () => {
  it('getSingleBlog', async () => {
    axios.get.mockResolvedValue({ data: 'Test' });
    getSingleBlog('test_id')
      .then((data) => {
        expect(axios.get).toBeCalledWith('https://backendblog.herokuapp.com/blogs/test_id');
        expect(data).toEqual('Test');
      });
  });
});
