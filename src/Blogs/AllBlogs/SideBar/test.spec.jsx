import React from 'react';
import { shallow, mount } from 'enzyme';
import SideBar from '.';

describe('<SideBar />', () => {
  let wrapper;
  const props = {
    labels: ['cats', 'cats', 'lions', 'dogs'],
    selected: 'All',
  };
  beforeEach(() => {
    wrapper = shallow(<SideBar {...props} />);
  });
  it('Should render the correct amount of elements', () => {
    expect(wrapper.find('LabelLink')).toHaveLength(4);
  });
  it('Should show how many the correct amount of elements', () => {
    expect(wrapper.find('LabelLink').at(0).text()).toBe('All (4)');
    expect(wrapper.find('LabelLink').at(1).text()).toBe('cats (2)');
    expect(wrapper.find('LabelLink').at(2).text()).toBe('lions (1)');
    expect(wrapper.find('LabelLink').at(3).text()).toBe('dogs (1)');
  });
  describe('Highlighted labels', () => {
    it('Should highlight all label if selected', () => {
      wrapper = mount(<SideBar {...props} />);
      expect(wrapper.find('LabelLink').at(0)).toHaveStyleRule('background', '#91A8D0');
      expect(wrapper.find('LabelLink').at(0)).toHaveStyleRule('color', 'white');
    });
    it('Should highlight the cats labels if selected', () => {
      wrapper = mount(<SideBar {...props} />);
      wrapper.setProps({ selected: 'cats' });
      expect(wrapper.find('LabelLink').at(1)).toHaveStyleRule('background', '#91A8D0');
      expect(wrapper.find('LabelLink').at(1)).toHaveStyleRule('color', 'white');
    });
    it('Should highlight the cats labels if selected', () => {
      wrapper = mount(<SideBar {...props} />);
      wrapper.setProps({ selected: 'dogs' });
      expect(wrapper.find('LabelLink').at(3)).toHaveStyleRule('background', '#91A8D0');
      expect(wrapper.find('LabelLink').at(3)).toHaveStyleRule('color', 'white');
    });
  });
});
