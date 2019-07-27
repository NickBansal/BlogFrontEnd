import React from 'react';
import { mount } from 'enzyme';
import CreateModal from '.';

describe('<CreateModal />', () => {
  let wrapper;
  const props = {
    openCreate: jest.fn(),
    create: false,
    addBlog: jest.fn(),
  };
  beforeEach(() => {
    wrapper = mount(<CreateModal {...props} />);
  });
  it('Should pass in the correct styles when create is false', () => {
    expect(wrapper.find('Modal')).toHaveStyleRule('top', '-90%');
    expect(wrapper.find('Modal')).toHaveStyleRule('opacity', '0');
  });
  it('Should pass in the correct styles when create is true', () => {
    wrapper.setProps({ create: true });
    expect(wrapper.find('Modal')).toHaveStyleRule('top', '15%');
    expect(wrapper.find('Modal')).toHaveStyleRule('opacity', '1');
  });
});
