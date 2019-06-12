import styled, { createGlobalStyle } from 'styled-components';
import { Link } from '@reach/router';
import { colors } from 'Components/StyleGuide';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
    padding: 0;
    margin-top: 100px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 23px;
  color: ${colors.textColor};
  line-height: 1.4rem;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  height: 100%;
`;
