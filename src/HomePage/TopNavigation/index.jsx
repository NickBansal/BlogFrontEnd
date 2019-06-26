import React from 'react';
import styled from 'styled-components';
import { colors, transitionSpeed } from 'Components/StyleGuide';

const NavigationWrapper = styled.div`
    postion: sticky;
    top: 0;
    left:0;
    width: 100%;
    background: ${colors.navBackground};
    color: ${colors.navText};
`;

const Divider = styled.div`
    display: flex;
`;

const Links = styled.h2`
    font-weight: normal;
    padding: 10px;
    margin: 0;
    &:hover {
        cursor: pointer;
        background: ${colors.navHighlight};
        color: ${colors.navBackground};
    }
    transition: ${transitionSpeed} ease-in;
`;

const MaxWidth = styled.div`
    max-width: 900px;
    display: flex;
    justify-content: space-between;
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
