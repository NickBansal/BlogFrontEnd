import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';
import { spacing } from 'Components/StyleGuide';
import { Title } from 'Components/GlobalStyles';

const LabelWrapper = styled.div`
display: flex;
flex-direction: column;
flex-basis: 15%;
padding: ${spacing.s5} 0;
`;

const LabelLink = styled.p`
margin:0;
`;

const CatTitle = styled(Title)`
margin-bottom: ${spacing.s1};
`;

const SideBar = ({ labels }) => (
  <LabelWrapper>
    <CatTitle>Categories</CatTitle>
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
