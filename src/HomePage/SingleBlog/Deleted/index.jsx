import React from 'react';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';
import { colors } from 'Components/StyleGuide';
import Buttons from 'Components/Buttons';
import { Link } from '@reach/router';
import { ModalWrapper } from 'Components/GlobalStyles';

const Modal = styled(ModalWrapper)`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: ${({ deleted }) => (deleted ? '25%' : '-25%')};
  opacity: ${({ deleted }) => (deleted ? 1 : 0)};
`;
Modal.displayName = 'Modal';

const DeletedText = styled.p`
    font-size: 20px;
    color: ${colors.textColor};
`;
DeletedText.displayName = 'DeletedText';

const DeleteModal = ({
  deleted, removeBlog, removeDeleted, category,
}) => (
  <Modal deleted={deleted}>
    <DeletedText>Blog has been deleted</DeletedText>
    <Link
      to="/"
      onClick={() => {
        removeBlog(category);
        removeDeleted();
      }}
    >
      <Buttons text="Go to HomePage" />
    </Link>
  </Modal>
);

DeleteModal.propTypes = {
  deleted: bool,
  removeBlog: func.isRequired,
  removeDeleted: func.isRequired,
  category: string.isRequired,
};

DeleteModal.defaultProps = {
  deleted: false,
};

export default DeleteModal;
