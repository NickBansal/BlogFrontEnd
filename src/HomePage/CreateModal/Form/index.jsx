import React from 'react';
import styled from 'styled-components';
import { spacing, colors, transitionSpeed } from 'Components/StyleGuide';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${spacing.s2} 0;
`;

const InputStyled = styled.input`
  height: 40px;
  width: 80%;
  padding: 0 ${spacing.s1};
  font-size: 20px;
  border-radius: 4px;
  border: 2px solid ${colors.imageBorder};
`;

const TextArea = styled(InputStyled)`
  height: 200px;
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

const SubmitStyled = styled.button`
  margin: ${spacing.s2} auto ${spacing.s1};
  width: 20%;
  font-size: 20px;
  height: 40px;
  border-radius: 10px;
  border: solid 3px ${colors.navHighlight};
  color: ${colors.navHighlight};

  &:hover {
    cursor: pointer;
    background: ${colors.navHighlight};
    color: ${colors.navBackground};
  }

  &:focus {
    outline: none;
  }
  transition: ${transitionSpeed};
`;

const Form = () => (
  <FormStyled onSubmit={(e) => {
    e.preventDefault();
    console.log({
      title: e.target[0].value,
      label: e.target[1].value,
      Image: e.target[2].value,
      body: e.target[3].value,
    });
  }}
  >
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
      <TextArea rows="4" cols="70" wrap="hard" />
    </Label>
    <SubmitStyled type="submit">Submit</SubmitStyled>
  </FormStyled>
);

export default Form;
