import React from 'react';
import {
  arrayOf, string, func, bool,
} from 'prop-types';
import styled from 'styled-components';
import { Link } from '@reach/router';
import {
  spacing, colors, transitionSpeed, breakPoints,
} from 'Components/StyleGuide';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column
  display: none;
  padding: 50px ${spacing.s2};
  filter: ${({ disable }) => (disable ? 'grayscale(30%) blur(5px)' : 'none')};
  transition: ${transitionSpeed};
  transition-delay: ${transitionSpeed};
  pointer-events: ${({ disable }) => (disable ? 'none' : 'auto')};

  @media (min-width: ${breakPoints.tablet}) {
    display: block;
  }
`;
SidebarWrapper.displayName = 'SidebarWrapper';

const Title = styled.h2`
  color: ${colors.textColor};
  margin: ${spacing.s1} 0;
`;
Title.displayName = 'Title';

const Label = styled.p`
  margin: 0 0 0 ${spacing.s2};
  color: ${colors.textColor};

  &:hover {
    cursor: pointer;
    color: ${colors.highlightText};
  }
  transition: ${transitionSpeed};
`;
Label.displayName = 'Label';

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.navText};
`;

const Sidebar = ({ labels, handleClick, disable }) => {
  const labelObj = labels.reduce((acc, value) => {
    // eslint-disable-next-line no-unused-expressions
    acc[value] ? acc[value] += 1 : acc[value] = 1;
    return acc;
  }, {});

  const objKeys = Object.keys(labelObj);

  return (
    <SidebarWrapper disable={disable}>
      <Title>Categories</Title>
      <LinkStyled to="/">
        <Label onClick={() => handleClick('All')}>
          {`All (${labels.length})`}
        </Label>
      </LinkStyled>
      {objKeys.map((label, index) => (
        <LinkStyled key={String(index)} to="/">
          <Label onClick={() => handleClick(label)}>
            {`${label} (${labelObj[label]})`}
          </Label>
        </LinkStyled>
      ))}
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  labels: arrayOf(string).isRequired,
  handleClick: func.isRequired,
  disable: bool.isRequired,
};

export default Sidebar;
