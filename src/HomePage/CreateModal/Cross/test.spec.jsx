import React from 'react';
import { shallow } from 'enzyme';
import Cross from '.';

describe('<Cross />', () => {
  it('Should call the openCreate function on the onClick event', () => {
    const openCreate = jest.fn();
    const wrapper = shallow(<Cross openCreate={openCreate} />);
    expect(openCreate).not.toBeCalled();
    wrapper.find('MainCross').prop('onClick')();
    expect(openCreate).toBeCalledWith(false);
  });
});
