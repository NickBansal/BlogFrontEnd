import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';
import {
  spacing, colors, transitionSpeed, breakPoints,
} from 'Components/StyleGuide';
import { Title } from 'Components/GlobalStyles';

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 15%;
  padding: ${spacing.s5} ${spacing.s2};

  @media (min-width: ${breakPoints.desktop}) {
    flex-basis: 25%;
  }
`;

const LabelTitle = styled(Title)`
  margin-bottom: ${spacing.s1};
`;

const LabelLink = styled.p`
  margin: 0 0 0 ${spacing.s1};
  color: ${colors.textColor};
  width: 100px;

  &:hover {
    cursor: pointer;
    color: white;
    background: ${colors.highlightText};
  }

  transition: all ${transitionSpeed} ease;
`;

const SideBar = ({ labels }) => (
  <LabelWrapper>
    <LabelTitle>Categories</LabelTitle>
    {labels.map((label, index) => (
      <LabelLink key={String(index)}>{label}</LabelLink>
    ))}
  </LabelWrapper>
);

SideBar.propTypes = {
  labels: arrayOf(string),
};

SideBar.defaultProps = {
  labels: [],
};

export default SideBar;
