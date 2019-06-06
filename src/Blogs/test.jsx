import React from 'react';
import { shallow } from 'enzyme';
import Blog from '.';

describe('<Blog />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Blog />);
  });
  it('Should render a top Navigation component', () => {
    expect(wrapper.find('TopNavigation').exists()).toBe(true);
  });
});
