import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { spacing, colors, transitionSpeed } from 'Components/StyleGuide';

const SubmitStyled = styled.button`
  margin: ${spacing.s2} auto;
  min-width: 20%;
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

const Buttons = ({ text }) => <SubmitStyled type="submit">{text}</SubmitStyled>;

Buttons.propTypes = {
  text: string.isRequired,
};

export default Buttons;
