import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from '.';

describe('<ErrorMessage />', () => {
  it('Should show the correct error message for no blogs found', () => {
    const wrapper = shallow(<ErrorMessage singleBlog />);
    expect(wrapper.find('Message').children().text()).toBe('Blog does not exist');
  });
  it('Should show the correct error message for no blogs found', () => {
    const wrapper = shallow(<ErrorMessage singleBlog={false} />);
    expect(wrapper.find('Message').children().text()).toBe('Something went wrong');
  });
});
