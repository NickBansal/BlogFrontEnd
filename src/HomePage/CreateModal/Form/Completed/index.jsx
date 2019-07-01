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

const Completed = ({ openCreate, id }) => (
  <div>
    <Title>Blog successfully posted</Title>
    <ButtonWrapper>
      <Link to="/">
        <Buttons onClick={() => openCreate(false)} text="Homepage" />
      </Link>
      <Link to={`/${id}`}>
        <Buttons text="Blog" />
      </Link>
    </ButtonWrapper>
  </div>
);

Completed.propTypes = {
  openCreate: func.isRequired,
  id: string.isRequired,
};

export default Completed;
