import React from 'react';
import {
  render, cleanup, waitForElementToBeRemoved, wait, fireEvent,
} from '@testing-library/react';
import { getSingleBlog, deleteSingleBlog } from 'Utils';
import SingleBlog from '.';

jest.mock('Utils');

afterEach(cleanup);

const data = [{
  _id: '1234',
  title: 'Title',
  body: 'Body',
  category: 'Label',
  image: 'image',
  created: new Date('2019/10/21'),
}];

describe('<SingleBlog />', () => {
  let wrapper;
  const handleClick = jest.fn();
  const openDelete = jest.fn();
  const props = {
    id: '',
    handleClick,
    removeBlog: jest.fn(),
    openDelete,
    deleted: false,
  };
  beforeEach(() => {
    getSingleBlog.mockResolvedValueOnce(data);
  });

  it('Should render the correct title and remove the loading spinner', async () => {
    wrapper = render(<SingleBlog {...props} />);
    expect(wrapper.getByTestId('loading-spinner')).toBeDefined();

    await waitForElementToBeRemoved(() => wrapper.getByTestId('loading-spinner'));

    expect(wrapper.getByTestId('title')).toHaveTextContent('Title');
  });
  it('Should call the handleClick function on the onClick event handler', async () => {
    wrapper = render(<SingleBlog {...props} />);
    expect(handleClick).not.toHaveBeenCalled();

    await wait();

    const label = wrapper.getByTestId('label');
    fireEvent.click(label);
    expect(handleClick).toHaveBeenCalledWith('Label');
  });
  describe('Delete blog', () => {
    it('Should delete the blog once delete button is clicked', async () => {
      deleteSingleBlog.mockResolvedValueOnce();
      wrapper = render(<SingleBlog {...props} />);

      await wait();

      const deleteBtn = wrapper.getByText('Delete');
      fireEvent.click(deleteBtn);

      await wait();

      expect(deleteSingleBlog).toHaveBeenCalledWith('1234');
      expect(openDelete).toHaveBeenCalledTimes(1);
    });
  });
});
