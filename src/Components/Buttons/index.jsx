import React from 'react';
import styled from 'styled-components';
import { string, func, bool } from 'prop-types';
import { spacing, colors, transitionSpeed } from 'Components/StyleGuide';

const SubmitStyled = styled.button`
  margin: ${spacing.s2} auto;
  min-width: 120px;
  font-size: 20px;
  height: 40px;
  border-radius: 10px;
  border: solid 3px ${({ disabled }) => (disabled ? 'white' : colors.navHighlight)};
  color: ${({ disabled }) => (disabled ? 'white' : colors.navHighlight)};
  background: ${({ disabled }) => (!disabled ? 'white' : colors.disabledBtn)};
  
  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    background: ${({ disabled }) => (disabled ? colors.disabledBtn : colors.navHighlight)};
    color: ${({ disabled }) => (disabled ? 'white' : colors.navBackground)};
  }

  &:focus {
    outline: none;
  }
  transition: ${transitionSpeed};
`;
SubmitStyled.displayName = 'SubmitStyled';

const Buttons = ({ text, handleClick, disabled }) => (
  <SubmitStyled
    onClick={handleClick}
    type="submit"
    disabled={disabled}
  >
    {text}
  </SubmitStyled>
);

Buttons.propTypes = {
  text: string.isRequired,
  handleClick: func,
  disabled: bool,
};

Buttons.defaultProps = {
  handleClick: () => { },
  disabled: false,
};


export default Buttons;
