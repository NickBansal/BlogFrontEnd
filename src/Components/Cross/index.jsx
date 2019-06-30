import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from 'Components/StyleGuide';

const MainCross = styled.div`
  border: 2px solid ${colors.navText};
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
    border: 2px solid ${colors.navHighlight};
  }
`;

const Cross = () => <MainCross>X</MainCross>;

export default Cross;
