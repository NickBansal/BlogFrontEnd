import React from 'react';
import { shallow } from 'enzyme';
import TopNavigation from '.';

describe('<TopNavigation />', () => {
  let wrapper;
  const handleClick = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<TopNavigation handleClick={handleClick} />);
  });
  it('Should render the navigation with the correct links', () => {
    expect(wrapper.find('Labels')).toHaveLength(3);
  });
  it('Should render the correct text', () => {
    expect(wrapper.find('Labels').at(0).text()).toBe('Home');
    expect(wrapper.find('Labels').at(1).text()).toBe('Create');
    expect(wrapper.find('Labels').at(2).text()).toBe('Login');
  });
  it('Should call the correct function on the onclick event handler', () => {
    wrapper.find('Labels').at(0).prop('onClick')('All');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
