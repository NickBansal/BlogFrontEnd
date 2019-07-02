import React from 'react';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';
import { boxShadow, colors } from 'Components/StyleGuide';
import Buttons from 'Components/Buttons';
import { Link } from '@reach/router';

const ModalWrapper = styled.div`
  height: auto;
  width: 95%;
  border: 2px solid rgba(0,0,0,.1);
  box-shadow: ${boxShadow};
  position: absolute;
  top: ${({ deleted }) => (deleted ? '25%' : '-25%')};
  opacity: ${({ deleted }) => (deleted ? 1 : 0)};
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
  transition: 0.4s ease-in;
`;
ModalWrapper.displayName = 'ModalWrapper';

const DeletedText = styled.p`
    font-size: 20px;
    color: ${colors.textColor};
`;

const DeleteModal = ({
  deleted, removeBlog, id, removeDeleted,
}) => (
  <ModalWrapper deleted={deleted}>
    <DeletedText>Blog has been deleted</DeletedText>
    <Link to="/">
      <Buttons
        handleClick={() => {
          removeBlog(id);
          removeDeleted();
        }}
        text="Go to HomePage"
      />
    </Link>
  </ModalWrapper>
);

DeleteModal.propTypes = {
  deleted: bool,
  removeBlog: func.isRequired,
  id: string,
  removeDeleted: func.isRequired,
};

DeleteModal.defaultProps = {
  deleted: false,
  id: '',
};

export default DeleteModal;
