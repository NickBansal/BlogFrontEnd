import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import {
  colors, spacing, boxShadow,
} from 'Components/StyleGuide';
import Cross from 'Components/Cross';

const ModalWrapper = styled.div`
  height: 300px;
  width: 500px;
  border: 2px solid rgba(0,0,0,.1);
  box-shadow: ${boxShadow};
  position: absolute;
  top: ${props => (props.create ? '35%' : '-10%')};
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: ${props => (props.create ? 0 : 100)}
  opacity: ${props => (props.create ? 1 : 0)}
  transition: 0.4s ease-in;
`;

const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin: 0;
  background: ${colors.navBackground};
  color: ${colors.navText};
  padding: ${spacing.s1}
`;

const ModalHeader = styled.div`
    background: ${colors.navBackground};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CreateModal = ({ create }) => (
  <ModalWrapper create={create}>
    <ModalHeader>
      <Title>Create new post</Title>
      <Cross />
    </ModalHeader>
  </ModalWrapper>
);

CreateModal.propTypes = {
  create: bool.isRequired,
};

export default CreateModal;
