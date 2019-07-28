import axios from 'axios';
import postSingleBlog from '.';

jest.mock('axios');

describe('Testing all the API axios calls', () => {
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
});
