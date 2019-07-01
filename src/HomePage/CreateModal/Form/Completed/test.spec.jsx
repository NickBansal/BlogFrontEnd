import React from 'react';
import { shallow } from 'enzyme';
import Buttons from 'Components/Buttons';
import Completed from '.';

describe('<Completed />', () => {
  let wrapper;
  const openCreate = jest.fn();
  const props = {
    openCreate,
    id: '',
  };
  beforeEach(() => {
    wrapper = shallow(<Completed {...props} />);
  });
  it('Should render two buttons', () => {
    expect(wrapper.find(Buttons)).toHaveLength(2);
  });
  it('Should call the openCreate function on the onclick event handler', () => {
    expect(openCreate).not.toBeCalled();
    wrapper.find('LinkStyled').at(0).prop('onClick')();
    expect(openCreate).toBeCalledWith(false);
  });
});
