import React from 'react';
import { shallow } from 'enzyme';
import { SynchronousPromise } from 'synchronous-promise';
import Blog from '.';
import { getAllBlogs } from '../Utils';

jest.mock('Utils');

getAllBlogs.mockImplementation(() => SynchronousPromise.resolve(
  [
    [{ label: 'Cats' }, { label: 'Cats' }, { label: 'Dogs' }, { label: 'Lions' }],
  ],
));

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
  // it('Should make the correct API call and set the state', () => {
  //   expect(getAllBlogs).toHaveBeenCalledTimes(1);
  // });
  // it('Should pass through the correct labels to allBlogs', () => {
  //   expect(wrapper.find('AllBlogs').prop('labels')).toEqual(['Cats', 'Cats', 'Dogs', 'Lions']);
  // });
  // it('Should bring back the correct filtered items on the handleClick function', () => {
  //   wrapper.instance().handleClick('Cats');
  //   expect(wrapper.find('AllBlogs').prop('blogs')).toEqual([{ label: 'Cats' }, { label: 'Cats' }]);
  //   wrapper.instance().handleClick('Dogs');
  //   expect(wrapper.find('AllBlogs').prop('blogs')).toEqual([{ label: 'Dogs' }]);
  //   wrapper.instance().handleClick('All');
  //   expect(wrapper.find('AllBlogs').prop('blogs')).toEqual([{ label: 'Cats' }, { label: 'Cats' }, { label: 'Dogs' }, { label: 'Lions' }]);
  // });
});
