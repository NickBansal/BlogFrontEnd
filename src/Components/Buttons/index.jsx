import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import { spacing, colors, transitionSpeed } from 'Components/StyleGuide';

const SubmitStyled = styled.button`
  margin: ${spacing.s2} auto;
  min-width: 120px;
  font-size: 20px;
  height: 40px;
  border-radius: 10px;
  border: solid 3px ${colors.navHighlight};
  color: ${colors.navHighlight};

  &:hover {
    cursor: pointer;
    background: ${colors.navHighlight};
    color: ${colors.navBackground};
  }

  &:focus {
    outline: none;
  }
  transition: ${transitionSpeed};
`;
SubmitStyled.displayName = 'SubmitStyled';

const Buttons = ({ text, handleClick }) => <SubmitStyled onClick={handleClick} type="submit">{text}</SubmitStyled>;

Buttons.propTypes = {
  text: string.isRequired,
  handleClick: func,
};

Buttons.defaultProps = {
  handleClick: () => { },
};


export default Buttons;
