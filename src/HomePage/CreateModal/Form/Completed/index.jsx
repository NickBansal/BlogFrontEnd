import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';
import { Link } from '@reach/router';
import Buttons from 'Components/Buttons';
import { colors } from 'Components/StyleGuide';

const Title = styled.p`
  text-align: center;
  font-size: 24px;
  color: ${colors.textColor};
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const LinkStyled = styled(Link)`
    width: 50%;
    text-align: center;
    margin: auto;
`;
LinkStyled.displayName = 'LinkStyled';

const Completed = ({ openCreate, id, finished }) => {
  const handleClick = () => {
    openCreate(false);
    finished();
  };
  return (
    <div>
      <Title>Blog successfully posted</Title>
      <ButtonWrapper>
        <LinkStyled
          onClick={handleClick}
          to={`/${id}`}
        >
          <Buttons text="Go to Blog" />
        </LinkStyled>
      </ButtonWrapper>
    </div>
  );
};

Completed.propTypes = {
  openCreate: func.isRequired,
  id: string.isRequired,
  finished: func.isRequired,
};

export default Completed;
