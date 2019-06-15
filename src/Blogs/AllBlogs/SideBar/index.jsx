/* eslint-disable no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import { arrayOf, string, func } from 'prop-types';
import {
  spacing, colors, transitionSpeed, breakPoints,
} from 'Components/StyleGuide';
import { Title } from 'Components/GlobalStyles';

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 10%;
  padding: ${spacing.s5} ${spacing.s2};

  @media (min-width: ${breakPoints.desktop}) {
    flex-basis: 20%;
  }
`;

const LabelTitle = styled(Title)`
  margin-bottom: ${spacing.s1};
`;

const LabelLink = styled.p`
  margin: 0 0 0 ${spacing.s1};
  color: ${props => (props.selected ? 'white' : colors.textColor)};
  width: 100px;
  background: ${props => (props.selected ? colors.highlightText : 'white')}
  &:hover {
    cursor: pointer;
    color: white;
    background: ${colors.highlightText};
  }

  transition: all ${transitionSpeed} ease;
`;
LabelLink.displayName = 'LabelLink';

const SideBar = ({ labels, handleClick, selected }) => {
  let labelCount;

  if (labels.length > 0) {
    labelCount = labels.reduce((acc, label) => {
      (acc[label]) ? acc[label] += 1 : acc[label] = 1;
      return acc;
    }, {});
  }

  return (
    <LabelWrapper>
      <LabelTitle>Categories</LabelTitle>
      <LabelLink selected={selected === 'All'} onClick={() => handleClick('All')}>
        All
        {' '}
        {`(${labels.length})`}
      </LabelLink>
      {labelCount && Object.keys(labelCount).map((label, index) => (
        <LabelLink selected={selected === label} onClick={() => handleClick(label)} key={String(index)}>
          {`${label} (${labelCount[label]})`}
        </LabelLink>
      ))}
    </LabelWrapper>
  );
};

SideBar.propTypes = {
  labels: arrayOf(string),
  handleClick: func,
  selected: string,
};

SideBar.defaultProps = {
  labels: [],
  handleClick: () => { },
  selected: '',
};

export default SideBar;
