import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const InputStyled = styled.input`
  height: 25px;
`;

const Form = () => (
  <FormStyled>
    <InputStyled type="text" placeholder="Title..." />
    <InputStyled type="text" placeholder="Label..." />
    <InputStyled type="text" placeholder="Image..." />
    <InputStyled type="text" placeholder="Body..." />
  </FormStyled>
);

export default Form;
