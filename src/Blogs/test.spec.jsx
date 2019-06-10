import React from 'react';
import { shallow } from 'enzyme';
import { SynchronousPromise } from 'synchronous-promise';
import Blog from '.';
import { getAllBlogs } from '../Utils';

jest.mock('Utils');

const resolved = {
  blogs: [{
    title: 'title',
    image: 'image.jpg',
    body: 'body',
    label: 'label',
    created: new Date('2019-08-22'),
  }],
};

getAllBlogs.mockImplementation(() => SynchronousPromise.resolve({
  blogs: [resolved],
}));

describe('<Blog />', () => {
  let wrapper;
  const props = {
    allBlogs: [],
    labels: [],
  };
  beforeEach(() => {
    wrapper = shallow(<Blog {...props} />);
  });
  afterEach(() => {
    getAllBlogs.mockClear();
  });
  it('Should render a top Navigation component', () => {
    expect(wrapper.find('TopNavigation').exists()).toBe(true);
  });
  it('Should make the correct API call and set the state', () => {
    expect(getAllBlogs).toHaveBeenCalledTimes(1);
  });
});
