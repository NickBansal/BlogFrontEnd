import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';
import { Link, navigate } from '@reach/router';
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
`;
LinkStyled.displayName = 'LinkStyled';

const Grid = styled.div`
    width: 50%;
    text-align: center;
`;

const Completed = ({ openCreate, id }) => (
  <div>
    <Title>Blog successfully posted</Title>
    <ButtonWrapper>
      <Grid onClick={() => {
        openCreate(false);
        navigate('/');
      }}
      >
        <Buttons text="Homepage" />
      </Grid>
      <LinkStyled onClick={() => openCreate(false)} to={`/${id}`}>
        <Buttons text="Blog" />
      </LinkStyled>
    </ButtonWrapper>
  </div>
);

Completed.propTypes = {
  openCreate: func.isRequired,
  id: string.isRequired,
};

export default Completed;
