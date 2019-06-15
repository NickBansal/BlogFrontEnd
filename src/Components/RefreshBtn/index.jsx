import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { Link } from '@reach/router';
import { colors, transitionSpeed } from '../StyleGuide';

const ButtonStyled = styled(Link)`
  border: 2px solid ${colors.btnBorder};
  height: 30px;
  padding: 8px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  font-size: 17px;
  margin-top: 16px;
  color: ${colors.btnBorder};
  background: white;
  
  &:hover {
    color: white;
    background: ${colors.btnBorder};
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
