import React from 'react';
import styled from 'styled-components';
import {
  spacing, colors, imageShadow, transitionSpeed,
} from 'Components/StyleGuide';

const Input = styled.input`
    width: 150px;
    height: 20px;
    padding: ${spacing.s1} ${spacing.s2};
    font-size: 18px;
    border-radius: 5px;
    border: 2px solid ${colors.imageBorder};
    outline: none;
    color: ${colors.textColor};

    &:focus {
        box-shadow: inset ${imageShadow}
    }
    transition: ${transitionSpeed};

`;

const Search = () => (
  <form>
    <Input id="searchBar" type="text" placeholder="Search" />
  </form>
);

export default Search;
