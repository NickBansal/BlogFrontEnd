import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import {
  spacing, colors, transitionSpeed,
} from 'Components/StyleGuide';

const Select = styled.form`
    height: 40px;
    padding: 0 ${spacing.s2};
    font-size: 18px;
    border-radius: 5px;
    outline: none;
    color: ${colors.textColor};
    display: flex;
`;

const Selection = styled.div`
    display: flex;
    align-items: center;
    margin: 0 ${spacing.s1};
`;

const Input = styled.input`
    margin-right: 8px;

    &:hover {
        cursor: pointer;
    }
`;

const Label = styled.label`
    &:hover {
        color: ${colors.highlightText};
        cursor: pointer;
    }

    transition: all ${transitionSpeed} ease;
`;

const Filter = ({ handleSort }) => (
  <Select onClick={e => handleSort(e.target.value)}>
      <Selection>
          <Input
        type="radio"
        id="title"
        name="drone"
              value="title"
      />
      <Label htmlFor="title">Title</Label>
    </Selection>

    <Selection>
      <Input
        type="radio"
        id="created"
        name="drone"
        value="created"
      />
      <Label htmlFor="created">Created</Label>
    </Selection>

    <Selection>
      <Input
        type="radio"
        id="category"
        name="drone"
        value="category"
      />
      <Label htmlFor="category">Category</Label>

    </Selection>
  </Select>
);

Filter.propTypes = {
  handleSort: func,
};

Filter.defaultProps = {
  handleSort: () => { },
};

export default Filter;
