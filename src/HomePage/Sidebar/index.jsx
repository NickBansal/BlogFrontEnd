import React from 'react';
import { arrayOf, string } from 'prop-types';
import styled from 'styled-components';
import { spacing, colors } from 'Components/StyleGuide';

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column
    flex-basis: 20%
    padding: ${spacing.s2};
`;

const Title = styled.h2`
  color: ${colors.textColor};
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
        <p key={String(index)}>
          {`${label} (${labelObj[label]})`}
        </p>
      ))}
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  labels: arrayOf(string).isRequired,
};

export default Sidebar;
