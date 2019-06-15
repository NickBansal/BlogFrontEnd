import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import {
  spacing, transitionSpeed, colors,
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
background: ${colors.btnBackground};
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
color: ${colors.btnText};
margin: 0;
height: 100%;
display: flex;
align-items: center;
padding: 0 ${spacing.s3};

&:hover {
  cursor: pointer;
  background: #9B1B30;
  color: ${colors.btnBackground};
}
transition: all ${transitionSpeed} ease;
`;
Labels.displayName = 'Labels';

const MaxNav = styled.div`
  height: 100%;
  display: flex;
  width: 80%;
  justify-content: space-around;
  max-width: 1000px;
`;

const TopNavigation = ({ handleClick }) => (
  <Navigation>
    <MaxNav>
      <LinkStyled to="/">
        <Labels onClick={() => handleClick('All')}>Home</Labels>
      </LinkStyled>
      <LoginNavigation>
        <Labels>Create</Labels>
        <Labels>Login</Labels>
      </LoginNavigation>
    </MaxNav>
  </Navigation>
);

TopNavigation.propTypes = {
  handleClick: func,
};

TopNavigation.defaultProps = {
  handleClick: () => { },
};

export default TopNavigation;
