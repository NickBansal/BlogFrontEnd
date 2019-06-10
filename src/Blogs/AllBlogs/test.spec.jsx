import React from 'react';
import { shallow } from 'enzyme';
import AllBlogs from '.';

describe('<AllBlogs />', () => {
  let wrapper;
  const props = {
    blogs: [{
      title: 'title',
      image: 'image.jpg',
      body: 'body',
      label: 'label',
      created: 'created',
    }],
  };
  beforeEach(() => {
    wrapper = shallow(<AllBlogs {...props} />);
  });
  it('Should render a title', () => {
    expect(wrapper.find('BlogTitle').exists()).toBe(true);
  });
});
