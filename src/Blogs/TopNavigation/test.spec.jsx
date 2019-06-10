import React from 'react';
import { shallow } from 'enzyme';
import TopNavigation from '.';

describe('<TopNavigation />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TopNavigation />);
  });
  it('Should render the navigation with the correct links', () => {
    expect(wrapper.find('Labels')).toHaveLength(3);
  });
  it('Should render the correct text', () => {
    expect(wrapper.find('Labels').at(0).text()).toBe('Nick Bansal');
    expect(wrapper.find('Labels').at(1).text()).toBe('Create');
    expect(wrapper.find('Labels').at(2).text()).toBe('Login');
  });
});
