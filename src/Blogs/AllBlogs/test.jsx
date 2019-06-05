import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import AllBlogs from '.';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });


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
