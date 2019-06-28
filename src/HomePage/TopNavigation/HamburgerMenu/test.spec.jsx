import React from 'react';
import { shallow } from 'enzyme';
import HamburgerMenu from '.';

describe('<HamburgerMenu />', () => {
  it('Should render a container', () => {
    const wrapper = shallow(<HamburgerMenu />);
    expect(wrapper.find('Container').exists()).toBe(true);
  });
  it('Should render a container', () => {
    const wrapper = shallow(<HamburgerMenu />);
    expect(wrapper.find('Line')).toHaveLength(3);
  });
});
