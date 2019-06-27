import React from 'react';
import { arrayOf, string } from 'prop-types';
import styled from 'styled-components';
import {
  spacing, colors, transitionSpeed, breakPoints,
} from 'Components/StyleGuide';

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column
    display: none;
    padding: 50px ${spacing.s2};

    @media (min-width: ${breakPoints.tablet}) {
        display: block;
    }
`;

const Title = styled.h2`
    color: ${colors.textColor};
    margin: ${spacing.s1} 0;
`;

const Label = styled.p`
    margin: 0 0 0 ${spacing.s2};
    color: ${colors.textColor};

      
  &:hover {
    cursor: pointer;
    color: ${colors.highlightText};
  }
  transition: ${transitionSpeed};
`;

const Sidebar = ({ labels }) => {
  const labelObj = labels.reduce((acc, value) => {
    // eslint-disable-next-line no-unused-expressions
    acc[value] ? acc[value] += 1 : acc[value] = 1;
    return acc;
  }, {});

  const objKeys = Object.keys(labelObj);

  return (
    <SidebarWrapper>
      <Title>Categories</Title>
      {objKeys.map((label, index) => (
        <Label key={String(index)}>
          {`${label} (${labelObj[label]})`}
        </Label>
      ))}
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  labels: arrayOf(string).isRequired,
};

export default Sidebar;
