import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { func, bool } from 'prop-types';
import {
  colors, transitionSpeed, spacing, breakPoints,
} from 'Components/StyleGuide';
import HamburgerMenu from './HamburgerMenu';

const NavigationWrapper = styled.div`
  width: 100%;
  background: ${colors.navBackground};
  color: ${colors.navText};
  cursor: ${({ create }) => (create ? 'not-allowed' : 'auto')};
`;
NavigationWrapper.displayName = 'NavigationWrapper';

const Divider = styled.div`
  display: none;

  @media (min-width: ${breakPoints.tablet}) {
    display: flex;
  }
`;

const Links = styled.h2`
  font-weight: normal;
  padding: ${spacing.s1};
  margin: 0;
  &:hover {
    cursor: ${({ create }) => (create ? 'not-allowed' : 'pointer')};
    background: ${({ create }) => (create ? colors.navBackground : colors.navHighlight)};
    color: ${({ create }) => (create ? colors.navText : colors.navBackground)};
  }
  transition: ${transitionSpeed} ease-in;
`;
Links.displayName = 'Links';

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.navText};
`;

const MaxWidth = styled.div`
  max-width: 900px;
  display: flex;
  padding: 0 ${spacing.s2};
  justify-content: space-between;
  margin: auto;
  z-index: 400;
`;

const TopNavigation = ({
  handleClick, openCreate, disable,
}) => (
  <NavigationWrapper>
    <MaxWidth>
      {!disable && (
        <LinkStyled to="/">
          <Links create={disable} onClick={() => handleClick('All')}>Home</Links>
        </LinkStyled>
      )}
      {disable && (
        <Links
          create={disable}
          onClick={() => handleClick('All')}
        >
            Home
        </Links>
      )}
      <HamburgerMenu />
      <Divider>
        <Links create={disable} onClick={() => openCreate(true)}>Create</Links>
        <Links create={disable}>Login</Links>
      </Divider>
    </MaxWidth>
  </NavigationWrapper>
);

TopNavigation.propTypes = {
  handleClick: func.isRequired,
  openCreate: func.isRequired,
  disable: bool,
};

TopNavigation.defaultProps = {
  disable: false,
};

export default TopNavigation;
