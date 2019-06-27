import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { colors, transitionSpeed, spacing } from 'Components/StyleGuide';

const NavigationWrapper = styled.div`
    width: 100%;
    background: ${colors.navBackground};
    color: ${colors.navText};
`;

const Divider = styled.div`
    display: flex;
`;

const Links = styled.h2`
    font-weight: normal;
    padding: ${spacing.s1};
    margin: 0;
    &:hover {
        cursor: pointer;
        background: ${colors.navHighlight};
        color: ${colors.navBackground};
    }
    transition: ${transitionSpeed} ease-in;
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: ${colors.navText};
`;

const MaxWidth = styled.div`
    max-width: 900px;
    display: flex;
    padding: 0 ${spacing.s2};
    justify-content: space-between;
    margin: auto
`;

const TopNavigation = () => (
  <NavigationWrapper>
    <MaxWidth>
      <LinkStyled to="/">
        <Links>Home</Links>
      </LinkStyled>
      <Divider>
        <Links>Create</Links>
        <Links>Login</Links>
      </Divider>
    </MaxWidth>
  </NavigationWrapper>

);

export default TopNavigation;
