import React from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from 'Components/StyleGuide';

const Line = styled.div`
    width: 30px;
    height: 4px;
    background-color: ${colors.navText};
    margin: 3px 0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid ${colors.navText};
    justify-content: center;
    margin: 4px 8px;
    padding: 2px 6px;
    border-radius: 10px;

    @media (min-width: ${breakPoints.tablet}) {
        display: none;
    }
`;

const Hamburger = () => (
  <Container>
    <Line />
    <Line />
    <Line />
  </Container>
);

export default Hamburger;
