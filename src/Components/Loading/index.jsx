import React from 'react';
import styled from 'styled-components';
import { spacing, colors } from 'Components/StyleGuide';

const LoadStyled = styled.h1`
  margin-top: ${spacing.s5};
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div`
  border: 10px solid #f3f3f3; 
  border-top: 10px solid ${colors.navHighlight}; 
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1s ease-in infinite;
  z-index: 200;
  position: absolute;
  left: 50%; 
  -webkit-transform: translate(-50%, 0);  

  @keyframes spin {
    0% { transform: rotate(0deg); }
    99% { transform: rotate(360deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loading = () => <LoadStyled><Spinner /></LoadStyled>;

export default Loading;
