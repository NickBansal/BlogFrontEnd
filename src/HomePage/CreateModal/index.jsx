import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';
import {
  colors, spacing, breakPoints,
} from 'Components/StyleGuide';
import { ModalWrapper } from 'Components/GlobalStyles';
import Cross from './Cross';
import Form from './Form';

const Modal = styled(ModalWrapper)`
  top: ${props => (props.create ? '15%' : '-60%')};
  opacity: ${props => (props.create ? 1 : 0)};
  z-index:200
  @media (min-width: ${breakPoints.mobile}) {
    width: 550px;
  }
`;
Modal.displayName = 'Modal';

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

const CreateModal = ({ create, openCreate, addBlog }) => (
  <Modal create={create}>
    <ModalHeader>
      <Title>Create new post</Title>
      <Cross openCreate={openCreate} />
    </ModalHeader>
    <Form openCreate={openCreate} addBlog={addBlog} />
  </Modal>
);

CreateModal.propTypes = {
  create: bool.isRequired,
  openCreate: func.isRequired,
  addBlog: func.isRequired,
};

export default CreateModal;
