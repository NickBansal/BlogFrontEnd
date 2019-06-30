import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { colors, spacing, transitionSpeed } from 'Components/StyleGuide';

const MainCross = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 24px;
  color: ${colors.navText};
  margin: ${spacing.s1};
  &:hover {
    cursor: pointer;
    color: ${colors.navHighlight};
  }
  transition: ${transitionSpeed} ease-in;
`;
MainCross.displayName = 'MainCross';

const Cross = ({ openCreate }) => <MainCross onClick={() => openCreate(false)}>X</MainCross>;

Cross.propTypes = {
  openCreate: func.isRequired,
};

export default Cross;
