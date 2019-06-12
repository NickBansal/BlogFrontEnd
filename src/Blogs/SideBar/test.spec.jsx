import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '.';

describe('<SideBar />', () => {
  const props = {
    labels: ['cats', 'cats', 'lions', 'dogs'],
  };
  it('Should render the correct amount of elements', () => {
    const wrapper = shallow(<SideBar {...props} />);
    expect(wrapper.find('LabelLink')).toHaveLength(4);
  });
  it('Should show how many the correct amount of elements', () => {
    const wrapper = shallow(<SideBar {...props} />);
    expect(wrapper.find('LabelLink').at(0).text()).toBe('All (4)');
    expect(wrapper.find('LabelLink').at(1).text()).toBe('cats (2)');
    expect(wrapper.find('LabelLink').at(2).text()).toBe('lions (1)');
  });
});
