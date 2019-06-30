import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';
import {
  colors, spacing, boxShadow, breakPoints,
} from 'Components/StyleGuide';
import Cross from './Cross';
import Form from './Form';

const ModalWrapper = styled.div`
  height: auto;
  width: 95%;
  border: 2px solid rgba(0,0,0,.1);
  box-shadow: ${boxShadow};
  position: absolute;
  top: ${props => (props.create ? '35%' : '-10%')};
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  background: white;
  opacity: ${props => (props.create ? 1 : 0)};
  transition: 0.4s ease-in;

  @media (min-width: ${breakPoints.mobile}) {
    width: 550px;
  }
`;
ModalWrapper.displayName = 'ModalWrapper';

const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin: 0;
  background: ${colors.navBackground};
  color: ${colors.navText};
  padding: ${spacing.s1};
`;

const ModalHeader = styled.div`
    background: ${colors.navBackground};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CreateModal = ({ create, openCreate }) => (
  <ModalWrapper create={create}>
    <ModalHeader>
      <Title>Create new post</Title>
      <Cross openCreate={openCreate} />
    </ModalHeader>
    <Form />
  </ModalWrapper>
);

CreateModal.propTypes = {
  create: bool.isRequired,
  openCreate: func.isRequired,
};

export default CreateModal;
