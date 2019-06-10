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
      created: new Date('2019-08-22'),
    }],
  };
  beforeEach(() => {
    wrapper = shallow(<AllBlogs {...props} />);
  });
  it('Should render a title', () => {
    expect(wrapper.find('BlogTitle').exists()).toBe(true);
  });
  it('Should only display the first 200 characters of the blogs body', () => {
    wrapper.setProps({
      blogs: [{
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      }],
    });
    expect(wrapper.find('Body').text()).toHaveLength(203);
  });
  it('Should render the correct date', () => {
    expect(wrapper.find('Label').at(1).text()).toBe('Created: 22/08/2019');
  });
  it('Should render the correct labels', () => {
    expect(wrapper.find('Label').at(0).text()).toBe('in label');
  });
});
