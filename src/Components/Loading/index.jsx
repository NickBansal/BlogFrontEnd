import React from 'react';
import styled from 'styled-components';
import { spacing } from 'Components/StyleGuide';

const LoadStyled = styled.h1`
  margin-top: ${spacing.s5};
  display: flex;
  justify-content: center;
`;

const Loading = () => <LoadStyled>Loading....</LoadStyled>;

export default Loading;
