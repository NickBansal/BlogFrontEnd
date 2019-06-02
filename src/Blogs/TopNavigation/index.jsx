import React from 'react';
import styled from 'styled-components';
import {
  spacing, transitionSpeed,
} from '../../Components/StyleGuide';

const Navigation = styled.div`
box-shadow: 0px -12px 23px 0px rgba(0,0,0,0.75);
margin: 0;
font-size: 20px;
display: flex;
justify-content: space-around;
height: 60px;
align-items: center;
padding: 0 ${spacing.s4};
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

const TopNavigation = () => (
  <Navigation>
    <Labels>Nick Bansal</Labels>
    <LoginNavigation>
      <Labels>Create</Labels>
      <Labels>Login</Labels>
    </LoginNavigation>
  </Navigation>
);

export default TopNavigation;
