import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

const Message = styled.h2`

`;
Message.displayName = 'Message';

const ErrorMessage = ({ singleBlog }) => {
  const message = singleBlog ? 'Blog does not exist' : 'Something went wrong';
  return (
    <React.Fragment>
      <Message>{message}</Message>
    </React.Fragment>
  );
};

ErrorMessage.propTypes = {
  singleBlog: bool.isRequired,
};

export default ErrorMessage;
