import React from 'react';
import { shallow } from 'enzyme';
import RefreshBtn from '.';

describe('<RefreshBtn />', () => {
  it('Should render the correct text', () => {
    const text = 'Random text';
    const wrapper = shallow(<RefreshBtn text={text} />);
    expect(wrapper.find('ButtonStyled').text()).toBe('Random text');
  });
});
