import React from 'react';
import styled from 'styled-components';
import {
  spacing, colors,
} from 'Components/StyleGuide';

const Select = styled.div`
    height: 40px;
    padding: ${spacing.s1} ${spacing.s2};
    font-size: 18px;
    border-radius: 5px;
    outline: none;
    color: ${colors.textColor};
    display: flex;
`;

const Selection = styled.div`
    display: flex;
    align-items: center;
    margin: ${spacing.s1};
`;

const Input = styled.input`
    margin-right: 8px;
`;

const Filter = () => (
  <Select>
      <Selection>
          <Input
        type="radio"
        id="title"
        name="drone"
              value="title"
      />
      <label htmlFor="title">Title</label>
    </Selection>

    <Selection>
      <Input
        type="radio"
        id="created"
        name="drone"
              value="created"
      />
      <label htmlFor="created">Created</label>
    </Selection>

    <Selection>
      <Input
        type="radio"
        id="label"
        name="drone"
        value="label"
      />
      <label htmlFor="label">Label</label>

    </Selection>
  </Select>
);

export default Filter;
