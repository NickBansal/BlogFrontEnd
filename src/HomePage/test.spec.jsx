import React from 'react';
import { render, wait } from '@testing-library/react';
import { getAllBlogs } from 'Utils';
import Homepage from '.';

jest.mock('Utils');

describe('<Homepage />', () => {
  let wrapper;

  it('Should show an error message when api call is not successful', async () => {
    getAllBlogs.mockRejectedValue(new Error());
    wrapper = render(<Homepage />);
    await wait();
    expect(wrapper.getByText('Error')).toBeDefined();
  });
});
