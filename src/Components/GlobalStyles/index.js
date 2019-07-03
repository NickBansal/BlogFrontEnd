import styled, { createGlobalStyle } from 'styled-components';
import { boxShadow } from '../StyleGuide';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
    margin: 0;
  }
`;

export const ModalWrapper = styled.div`
  height: auto;
  width: 95%;
  border: 2px solid rgba(0,0,0,.1);
  box-shadow: ${boxShadow};
  position: absolute;
  left: 50%; 
  -webkit-transform: translate(-50%, 0);  
  background: white;
  z-index: 100;
  transition: 0.4s ease-in;
  border-radius: 8px;
`;
