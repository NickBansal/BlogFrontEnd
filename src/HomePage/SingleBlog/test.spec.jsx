import React from 'react';
import { render } from '@testing-library/react';
import { SynchronousPromise } from 'synchronous-promise';
import getSingleBlog from 'Utils/getSingleBlog';
import SingleBlog from '.';

jest.mock('Utils/getSingleBlog');
jest.mock('axios');

const data = {
  _id: '1234',
  title: 'Title',
  body: 'Body',
  category: 'Label',
  image: 'image',
  created: new Date('2019/10/21'),
};

describe('<SingleBlog />', () => {
  const props = {
    id: '',
    handleClick: jest.fn(),
    removeBlog: jest.fn(),
    deleted: false,
    openDelete: jest.fn(),
  };
  beforeEach(() => {
    getSingleBlog.mockImplementation(() => {
      SynchronousPromise.resolve(data);
    });
  });
  afterEach(() => {
    getSingleBlog.mockClear();
  });
  it('Should render a title', () => {
    const { getByTestId } = render(<SingleBlog {...props} />);
    expect(getByTestId('title')).toHaveTextContent('File selected, please click here to replace file');
  });
});
