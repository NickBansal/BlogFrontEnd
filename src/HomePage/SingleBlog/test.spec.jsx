import React from 'react';
import { render } from '@testing-library/react';
import getSingleBlog from 'Utils/getSingleBlog';
import SingleBlog from '.';

jest.mock('Utils/getSingleBlog');

const data = [{
  _id: '1234',
  title: 'Title',
  body: 'Body',
  category: 'Label',
  image: 'image',
  created: new Date('2019/10/21'),
}];

describe('<SingleBlog />', () => {
  const props = {
    id: '',
    handleClick: jest.fn(),
    removeBlog: jest.fn(),
    deleted: false,
    openDelete: jest.fn(),
  };
  beforeEach(() => {
    getSingleBlog.mockResolvedValue(data);
  });
  afterEach(() => {
    getSingleBlog.mockClear();
  });
  it('Should render the correct title', () => {
    const { getByTestId } = render(<SingleBlog {...props} />);
    expect(getByTestId('title')).toHaveTextContent('Title');
  });
  it('Should render the correct body', () => {
    const { getByTestId } = render(<SingleBlog {...props} />);
    expect(getByTestId('body')).toHaveTextContent('Body');
  });
  it('Should render the correct category', () => {
    const { getByTestId } = render(<SingleBlog {...props} />);
    expect(getByTestId('label')).toHaveTextContent('Label');
  });
});
