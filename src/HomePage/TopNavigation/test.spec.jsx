import React from 'react';
import { shallow } from 'enzyme';
import TopNavigation from '.';

describe('<TopNavigation />', () => {
  let wrapper;
  const handleClick = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<TopNavigation handleClick={handleClick} />);
  });
  it('Should render 3 links', () => {
    expect(wrapper.find('Links')).toHaveLength(3);
  });
  it('Should call the handleClick function on the onClick event handler', () => {
    expect(handleClick).not.toBeCalled();
    wrapper.find('Links').at(0).prop('onClick')();
    expect(handleClick).toBeCalledWith('All');
  });
});
