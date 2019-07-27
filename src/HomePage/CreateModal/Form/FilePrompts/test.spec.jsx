import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilePrompts from '.';

describe('<FilePrompt />', () => {
  const handleClick = jest.fn();
  const props = {
    notSupported: false,
    handleClick,
  };
  it('Should render correct text when file is not supported', () => {
    const { getByTestId } = render(<FilePrompts {...props} />);
    expect(getByTestId('file-dropped')).toHaveTextContent('File selected, please click here to replace file');
  });
  it('Should render correct text when file is not supported', () => {
    const { getByTestId } = render(<FilePrompts {...props} notSupported />);
    expect(getByTestId('file-dropped')).toHaveTextContent('File type not supported, please click here to replace file');
  });
  it('Should fire the handleClick function on the onClick event handler', () => {
    const { getByTestId } = render(<FilePrompts {...props} notSupported />);
    expect(handleClick).not.toHaveBeenCalled();
    fireEvent.click(getByTestId('file-dropped'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  describe('Renders the correct styling attributes', () => {
    it('file not supported', () => {
      const { getByTestId } = render(<FilePrompts {...props} notSupported />);
      expect(getByTestId('file-dropped')).toHaveStyleRule('color', '#9B1B30');
      expect(getByTestId('file-dropped')).toHaveStyleRule('border', '2px solid #9B1B30');
    });
    it('file supported', () => {
      const { getByTestId } = render(<FilePrompts {...props} />);
      expect(getByTestId('file-dropped')).toHaveStyleRule('color', '#577284');
      expect(getByTestId('file-dropped')).toHaveStyleRule('border', '2px solid #577284');
    });
  });
});
