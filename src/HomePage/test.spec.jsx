import React from 'react';
import { shallow } from 'enzyme';
import { SynchronousPromise } from 'synchronous-promise';
import { getAllBlogs } from 'Utils';
import Homepage from '.';

jest.mock('Utils');

getAllBlogs.mockImplementation(() => SynchronousPromise.resolve(
  [
    [{ label: 'Cats', id: 1 }, { label: 'Cats', id: 2 }, { label: 'Dogs', id: 3 }, { label: 'Lions', id: 4 }],
  ],
));

describe('<Blog />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Homepage />);
  });
  afterEach(() => {
    getAllBlogs.mockClear();
  });
  it('Should render a top Navigation component', () => {
    expect(wrapper.find('TopNavigation').exists()).toBe(true);
  });
});
