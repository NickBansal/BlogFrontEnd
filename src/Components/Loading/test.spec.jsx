import React from 'react';
import { shallow } from 'enzyme';
import Loading from '.';

describe('<Loading />', () => {
  it('Should render a Loading div', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find('LoadStyled').exists()).toBe(true);
  });
  it('Should render a Spinner', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find('Spinner').exists()).toBe(true);
  });
});
