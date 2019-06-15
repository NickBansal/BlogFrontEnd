import React from 'react';
import { shallow } from 'enzyme';
import Filter from '.';

describe('<Filter />', () => {
  let wrapper;
  const handleSort = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Filter handleSort={handleSort} />);
  });
  it('Should render three radio buttons', () => {
    expect(wrapper.find('Input')).toHaveLength(3);
  });
  it('Should render three radio buttons', () => {
    expect(wrapper.find('Label')).toHaveLength(3);
  });
  it('Should call the correct parameters on the handle sort function', () => {
    wrapper.find('Select').prop('onClick')({
      target: { value: 'Test Value' },
    });
    expect(handleSort).toHaveBeenCalledWith('Test Value');
  });
});
