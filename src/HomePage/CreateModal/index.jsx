import React from 'react';
import styled from 'styled-components';
import { colors, spacing, boxShadow } from 'Components/StyleGuide';

const ModalWrapper = styled.div`
  height: 300px;
  width: 500px;
  border: 2px solid rgba(0,0,0,.1);
  box-shadow: ${boxShadow};
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 0;
  background: ${colors.navBackground};
  color: ${colors.navText};
  padding: ${spacing.s1}
`;

const CreateModal = () => (
  <ModalWrapper>
    <Title>Create Modal</Title>
  </ModalWrapper>
);

export default CreateModal;
