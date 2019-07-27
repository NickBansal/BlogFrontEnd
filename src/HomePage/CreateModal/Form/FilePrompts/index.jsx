import React from 'react';
import { func, bool } from 'prop-types';
import styled from 'styled-components';
import { spacing, colors, breakPoints } from 'Components/StyleGuide';

const FileDropped = styled.div`
  height: 40px;
  width: 90%;
  border: 2px solid ${({ notSupported }) => (notSupported ? colors.navHighlight : colors.textColor)};
  color: ${({ notSupported }) => (notSupported ? colors.navHighlight : colors.textColor)}
  padding: 0 ${spacing.s1};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-style: italic;
  @media (min-width: ${breakPoints.mobile}) {
    width: 80%;
    font-size:  ${({ notSupported }) => (notSupported ? '16px' : '18px')}
  }

  &:hover {
    cursor: pointer;
  }
`;

const FilePrompts = ({ notSupported, handleClick }) => {
  const message = notSupported
    ? 'File type not supported, please click here to replace file'
    : 'File selected, please click here to replace file';
  return (
    <FileDropped onClick={handleClick} notSupported={notSupported}>{message}</FileDropped>
  );
};

FilePrompts.propTypes = {
  handleClick: func.isRequired,
  notSupported: bool.isRequired,
};

export default FilePrompts;
