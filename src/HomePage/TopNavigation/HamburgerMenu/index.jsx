import React from 'react';
import styled from 'styled-components';
import { colors, breakPoints, transitionSpeed } from 'Components/StyleGuide';

const Line = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${colors.navBackground};
  margin: 3px 0;
`;
Line.displayName = 'Line';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.navText};
  justify-content: center;
  margin: 4px 8px;
  padding: 2px 6px;
  border-radius: 10px;
  background: ${colors.navText};

  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }

  &:hover {
    cursor: pointer;
    background: ${colors.navHighlight};
    border: 1px solid ${colors.navHighlight};
  }

  transition: ${transitionSpeed};
`;
Container.displayName = 'Container';

const Hamburger = () => (
  <Container>
    <Line />
    <Line />
    <Line />
  </Container>
);

export default Hamburger;
