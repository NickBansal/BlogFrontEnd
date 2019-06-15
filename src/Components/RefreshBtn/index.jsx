import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { Link } from '@reach/router';
import { colors, transitionSpeed, spacing } from '../StyleGuide';

const ButtonStyled = styled(Link)`
  border: 2px solid ${colors.btnText};
  height: 30px;
  padding: ${spacing.s1};
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  font-size: 17px;
  margin-top: ${spacing.s2};
  color: ${colors.btnText};
  background: white;
  
  &:hover {
    color: white;
    background: ${colors.btnText};
  }
  transition: all ${transitionSpeed} ease;
`;

ButtonStyled.displayName = 'ButtonStyled';

const RefreshBtn = ({ text }) => (
  <ButtonStyled to="/">
    <strong>{text}</strong>
  </ButtonStyled>
);

RefreshBtn.propTypes = {
  text: string.isRequired,
};


export default RefreshBtn;
