import React from 'react';
import styled from 'styled-components';
import { spacing, colors } from 'Components/StyleGuide';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${spacing.s2} 0;
`;

const InputStyled = styled.input`
  height: 30px;
  width: 80%;
  padding: 0 ${spacing.s1};
  font-size: 20px;
  border-radius: 4px;
`;

const Label = styled.label`
  width: 100%;
  margin: ${spacing.s1}
  font-size: 20px;
  color: ${colors.textColor};
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  width: 13%;
`;

const Form = () => (
  <FormStyled onSubmit={e => e.stopPropagation()}>
    <Label>
      <Title>Title:</Title>
      <InputStyled id="title" type="text" placeholder="Title..." />
    </Label>
    <Label>
      <Title> Label:</Title>
      <InputStyled type="text" placeholder="Label..." />
    </Label>
    <Label>
      <Title> Image:</Title>
      <InputStyled type="text" placeholder="Image..." />
    </Label>
    <Label>
      <Title>Body:</Title>
      <InputStyled type="textarea" placeholder="Body..." />
    </Label>
    <input type="submit" />
  </FormStyled>
);

export default Form;
