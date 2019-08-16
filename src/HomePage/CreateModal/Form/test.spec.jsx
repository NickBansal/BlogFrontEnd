import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { postSingleBlog } from 'Utils';
import Form from '.';

afterEach(cleanup);

jest.mock('Utils');

describe('<Form />', () => {
  let wrapper;
  const openCreate = jest.fn();
  const addBlog = jest.fn();
  const props = { openCreate, addBlog };

  it('Should render a form with a disabled button', () => {
    wrapper = render(<Form {...props} />);
    wrapper.debug();
    expect(wrapper.getByText('Submit')).toHaveAttribute('disabled');
  });
});
