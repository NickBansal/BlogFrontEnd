import React from 'react';
import { shallow } from 'enzyme';
import Buttons from '.';

describe('<Buttons />', () => {
  it('Should render the correct text', () => {
    const wrapper = shallow(<Buttons text="Test" />);
    expect(wrapper.find('SubmitStyled').children().text()).toBe('Test');
  });
});
