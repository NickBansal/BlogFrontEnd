import React from 'react';
import { render } from '@testing-library/react';
import FilePrompts from '.';

describe('<FilePrompt />', () => {
  const props = {
    notSupported: false,
    handleClick: jest.fn(),
  };
  it('Renders correct text when file is not supported', () => {
    const { getByTestId } = render(<FilePrompts {...props} />);
    expect(getByTestId('file-dropped')).toHaveTextContent('File selected, please click here to replace file');
  });
  it('Renders correct text when file is not supported', () => {
    const { getByTestId } = render(<FilePrompts {...props} notSupported />);
    expect(getByTestId('file-dropped')).toHaveTextContent('File type not supported, please click here to replace file');
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
