import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
    postion: absolute;
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: gold;
`;

const Divider = styled.div`
    display: flex;
`;

const TopNavigation = () => (
  <NavigationWrapper>
    <h2>Home</h2>
    <Divider>
      <h2>Create</h2>
      <h2>Login</h2>
    </Divider>
  </NavigationWrapper>
);

export default TopNavigation;
