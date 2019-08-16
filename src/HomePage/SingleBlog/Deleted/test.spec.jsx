import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from '@reach/router';
import DeleteModal from '.';

describe('<DeleteModal />', () => {
  let wrapper;
  const removeBlog = jest.fn();
  const removeDeleted = jest.fn();
  const props = {
    removeBlog,
    removeDeleted,
    category: 'Test',
    deleted: true,
  };
  beforeEach(() => {
    wrapper = shallow(<DeleteModal {...props} />);
  });
  it('Should render a title', () => {
    expect(wrapper.find('DeletedText').children().text()).toBe('Blog has been deleted');
  });
  it('Should call the correct functions on the onClick event handler', () => {
    expect(removeBlog).not.toHaveBeenCalled();
    expect(removeDeleted).not.toHaveBeenCalled();
    wrapper.find(Link).prop('onClick')();
    expect(removeDeleted).toHaveBeenCalledTimes(1);
    expect(removeBlog).toHaveBeenCalledWith('Test');
  });
  it('Should have the correct style rules', () => {
    wrapper = mount(<DeleteModal {...props} />);
    expect(wrapper.find('Modal')).toHaveStyleRule('top', '45vh');
    expect(wrapper.find('Modal')).toHaveStyleRule('opacity', '1');

    wrapper.setProps({ deleted: false });
    expect(wrapper.find('Modal')).toHaveStyleRule('top', '-25%');
    expect(wrapper.find('Modal')).toHaveStyleRule('opacity', '0');
  });
});
