import React from 'react';
import styled from 'styled-components';
import { colors } from 'Components/StyleGuide';

const NavigationWrapper = styled.div`
    postion: absolute;
    width: 100%;
    background: ${colors.btnBackground};
    color: ${colors.btnText};
`;

const Divider = styled.div`
    display: flex;
`;

const Links = styled.h2`
    font-weight: normal;
    margin: 10px;

    &:hover {
        cursor: pointer;
    }
`;

const MaxWidth = styled.div`
    max-width: 1400px;
    display: flex;
    justify-content: space-around;
    margin: auto
`;

const TopNavigation = () => (
  <NavigationWrapper>
    <MaxWidth>
      <Links>Home</Links>
      <Divider>
        <Links>Create</Links>
        <Links>Login</Links>
      </Divider>
    </MaxWidth>
  </NavigationWrapper>

);

export default TopNavigation;
