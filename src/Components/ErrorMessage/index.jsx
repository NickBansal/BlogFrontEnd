import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { colors } from '../StyleGuide';
import RefreshBtn from '../RefreshBtn';

const FullMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.h2`
  color: ${colors.textColor};
`;
Message.displayName = 'Message';

const ErrorMessage = ({ singleBlog }) => {
  const message = singleBlog ? 'Blog does not exist' : 'Something went wrong';
  return (
    <FullMessage>
      <Message>{message}</Message>
      <RefreshBtn text="Return home" />
    </FullMessage>
  );
};

ErrorMessage.propTypes = {
  singleBlog: bool.isRequired,
};

export default ErrorMessage;
