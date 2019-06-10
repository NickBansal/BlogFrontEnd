import React from 'react';
import { shallow } from 'enzyme';
import { SynchronousPromise } from 'synchronous-promise';
import Blog from '.';
import { getAllBlogs } from '../Utils';

jest.mock('Utils');

getAllBlogs.mockImplementation(() => SynchronousPromise.resolve({}));

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
