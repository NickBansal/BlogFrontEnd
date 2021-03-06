import React from 'react';
import { shallow, mount } from 'enzyme';
import Sidebar from '.';

describe('<Sidebar />', () => {
  let wrapper;
  const handleClick = jest.fn();
  const props = {
    handleClick,
    labels: ['Cats', 'Cats', 'Lions', 'Dogs'],
    disable: true,
  };
  beforeEach(() => {
    wrapper = shallow(<Sidebar {...props} />);
  });
  afterEach(() => {
    handleClick.mockClear();
  });
  it('Should render a title', () => {
    expect(wrapper.find('Title').children().text()).toBe('Categories');
  });
  it('Should render the correct label and the amount next to it', () => {
    expect(wrapper.find('Label').at(0).render().text()).toBe('All (4)');
    expect(wrapper.find('Label').at(1).render().text()).toBe('Cats (2)');
    expect(wrapper.find('Label').at(2).render().text()).toBe('Lions (1)');
    expect(wrapper.find('Label').at(3).render().text()).toBe('Dogs (1)');
  });
  it('Should call the handleClick function on the onClick event handler', () => {
    expect(handleClick).not.toBeCalled();
    wrapper.find('Label').at(0).prop('onClick')();
    expect(handleClick).toBeCalledWith('All');
  });
  it('Should call the handleClick function on the onClick event handler', () => {
    expect(handleClick).not.toBeCalled();
    wrapper.find('Label').at(1).prop('onClick')();
    expect(handleClick).toBeCalledWith('Cats');
  });
  it('Should have the correct style rules', () => {
    wrapper = mount(<Sidebar {...props} />);
    expect(wrapper.find('SidebarWrapper')).toHaveStyleRule('filter', 'grayscale(30%) blur(5px)');
    expect(wrapper.find('SidebarWrapper')).toHaveStyleRule('pointer-events', 'none');

    wrapper.setProps({ disable: false });
    expect(wrapper.find('SidebarWrapper')).toHaveStyleRule('filter', 'none');
    expect(wrapper.find('SidebarWrapper')).toHaveStyleRule('pointer-events', 'auto');
  });
});
