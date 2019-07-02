import React from 'react';
import styled from 'styled-components';
import { boxShadow, colors } from 'Components/StyleGuide';
import Buttons from 'Components/Buttons';
import { Link } from '@reach/router';

const ModalWrapper = styled.div`
  height: auto;
  width: 95%;
  border: 2px solid rgba(0,0,0,.1);
  box-shadow: ${boxShadow};
  position: absolute;
  top: 25%;
  left: 50%; 
  -webkit-transform: translate(-50%, 0);  
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: white;
  border-radius: 8px;
`;
ModalWrapper.displayName = 'ModalWrapper';

const DeletedText = styled.p`
    font-size: 20px;
    color: ${colors.textColor};
`;

const CreateModal = () => (
  <ModalWrapper>
    <DeletedText>Blog has been deleted</DeletedText>
    <Link to="/">
      <Buttons text="Go to HomePage" />
    </Link>
  </ModalWrapper>
);

export default CreateModal;
