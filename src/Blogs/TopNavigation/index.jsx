import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
box-shadow: 0px -12px 23px 0px rgba(0,0,0,0.75);
margin: 0;
font-size: 20px;
display: flex;
justify-content: space-between;
height: 60px;
align-items: center;
padding: 0 30px;
`;

const LoginNavigation = styled.div`
  display: flex;
  height: 100%;
`;

const Labels = styled.p`
color: #CE5B78;
margin: 0;
height: 100%;
display: flex;
align-items: center;
padding: 0 20px;
&:hover {
  cursor: pointer;
  background:#F3E0BE;
  color: #F96714;
}
transition: all 0.3s ease;
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
