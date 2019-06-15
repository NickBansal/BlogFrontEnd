import React from 'react';
import styled from 'styled-components';
import {
  spacing, colors, imageShadow, transitionSpeed,
} from 'Components/StyleGuide';

const Select = styled.select`
    width: 186px;
    height: 40px;
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

const Filter = () => (
  <Select>
    <option value="volvo">Title</option>
    <option value="saab">Created</option>
    <option value="mercedes">Category</option>
  </Select>
);

export default Filter;
