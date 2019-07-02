import React from 'react';
import { shallow } from 'enzyme';
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
});
