import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing, colors, transitionSpeed } from 'Components/StyleGuide';
import { postSingleBlog } from 'Utils';

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
  border: 2px solid #864e164a;
  color: ${colors.textColor};
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

const Error = styled.p`
  text-align: center;
  color: ${colors.navHighlight};
  margin: ${spacing.s1} auto 0;
  border: 2px solid ${colors.navHighlight};
  height: 30px;
  width: 80%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Form = () => {
  const [state, setState] = useState({
    completed: false,
    error: false,
  });
  const { completed, error } = state;

  return completed
    ? <h1>Done</h1>
    : (
      <FormStyled onSubmit={(e) => {
        e.preventDefault();
        const data = ({
          title: e.target[0].value,
          label: e.target[1].value,
          Image: e.target[2].value,
          body: e.target[3].value,
        });
        postSingleBlog(data)
          .then(() => {
            setState({ error: false, completed: true });
          }).catch(() => {
            setState({ error: true, completed: false });
          });
      }}
      >
        <Label>
          <Title>Title:</Title>
          <InputStyled id="title" type="text" />
        </Label>
        <Label>
          <Title> Label:</Title>
          <InputStyled type="text" />
        </Label>
        <Label>
          <Title> Image:</Title>
          <InputStyled type="text" />
        </Label>
        <Label>
          <Title>Body:</Title>
          <TextArea rows="4" cols="70" wrap="hard" />
        </Label>
        {error && <Error>Please fill out all the fields</Error>}
        <SubmitStyled type="submit">Submit</SubmitStyled>
      </FormStyled>
    );
};

export default Form;
