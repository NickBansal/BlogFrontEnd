import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import {
  spacing, transitionSpeed,
} from 'Components/StyleGuide';
import { LinkStyled } from 'Components/GlobalStyles';

const Navigation = styled.div`
box-shadow: 0px -12px 23px 0px rgba(0,0,0,0.75);
margin: 0;
font-size: 20px;
display: flex;
justify-content: space-around;
height: 60px;
align-items: center;
padding: 0;
background:#F3E0BE;
position: fixed;
top: 0;
left: 0;
width: 100%;
`;

const LoginNavigation = styled.div`
  display: flex;
  height: 100%;
`;

const Labels = styled.p`
color: #F96714;
margin: 0;
height: 100%;
display: flex;
align-items: center;
padding: 0 ${spacing.s3};

&:hover {
  cursor: pointer;
  background: #9B1B30;
  color: #F3E0BE;
}
transition: all ${transitionSpeed} ease;
`;
Labels.displayName = 'Labels';

const TopNavigation = ({ handleClick }) => (
  <Navigation>
    <LinkStyled to="/">
      <Labels onClick={() => handleClick('All')}>Home</Labels>
    </LinkStyled>
    <LoginNavigation>
      <Labels>Create</Labels>
      <Labels>Login</Labels>
    </LoginNavigation>
  </Navigation>
);

TopNavigation.propTypes = {
  handleClick: func,
};

TopNavigation.defaultProps = {
  handleClick: () => { },
};

export default TopNavigation;
