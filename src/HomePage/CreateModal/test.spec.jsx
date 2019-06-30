import React from 'react';
import { mount } from 'enzyme';
import CreateModal from '.';

describe('<CreateModal />', () => {
  let wrapper;
  const props = {
    openCreate: jest.fn(),
    create: false,
  };
  beforeEach(() => {
    wrapper = mount(<CreateModal {...props} />);
  });
  it('Should pass in the correct styles when create is false', () => {
    expect(wrapper.find('ModalWrapper')).toHaveStyleRule('top', '-10%');
    expect(wrapper.find('ModalWrapper')).toHaveStyleRule('opacity', '0');
  });
  it('Should pass in the correct styles when create is true', () => {
    wrapper.setProps({ create: true });
    expect(wrapper.find('ModalWrapper')).toHaveStyleRule('top', '35%');
    expect(wrapper.find('ModalWrapper')).toHaveStyleRule('opacity', '1');
  });
});
