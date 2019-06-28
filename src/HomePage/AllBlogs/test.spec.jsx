import React from 'react';
import { shallow, mount } from 'enzyme';
import AllBlogs from '.';

describe('<AllBlogs />', () => {
  let wrapper;
  const data = [{
    _id: '123456',
    title: 'Test title',
    edited: false,
    body: 'Test body',
    created: '21/10/1988',
    image: 'image.jpg',
    label: 'cats',
  }];
  beforeEach(() => {
    wrapper = shallow(<AllBlogs data={data} />);
  });
  it('Should render a title', () => {
    expect(wrapper.find('Title').children().text()).toBe('Test title');
  });
  it('Should render an image', () => {
    expect(wrapper.find('Image').exists()).toBe(true);
  });
  it('Should not display a bottom-border on the last element', () => {
    wrapper = mount(<AllBlogs data={data} />);
    wrapper.setProps({
      data: [...data, {
        _id: '654321',
        title: 'Test title 2',
        edited: false,
        body: 'Test body 2',
        created: '21/10/1988',
        image: 'image.jpg',
        label: 'cats',
      }],
    });
    expect(wrapper.find('BlogWrapper').at(1)).toHaveStyleRule('border-bottom', 'none');
  });
});
