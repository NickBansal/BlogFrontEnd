import React, { useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { spacing, colors } from 'Components/StyleGuide';
import { postSingleBlog } from 'Utils';
import Buttons from 'Components/Buttons';
import Completed from './Completed';

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


const Form = ({ openCreate, addBlog }) => {
  const [state, setState] = useState({
    completed: false,
    error: false,
    fileDropped: false,
    fileInput: null,
  });
  const {
    completed, error, id, fileDropped, fileInput,
  } = state;

  const completedDone = () => setState({ ...state, completed: false });

  const onChange = e => setState({ fileInput: e.target.files[0] });

  return completed
    ? <Completed id={id} openCreate={openCreate} finished={completedDone} />
    : (
      <FormStyled
        enctype="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.set('title', e.target[0].value);
          formData.set('category', e.target[1].value);
          formData.set('body', e.target[3].value);
          formData.append('productImage', fileInput);
          // const data = ({
          //   title: e.target[0].value,
          //   category: e.target[1].value,
          //   productImage: fileInput,
          //   body: e.target[3].value,
          // });

          postSingleBlog(formData)
            .then((blog) => {
              addBlog(blog);
              setState({
                error: false, completed: true, id: blog._id, fileDropped: false,
              });
            }).catch(() => {
              setState({ ...state, error: true, fileDropped: false });
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
          <input type="file" onChange={onChange} />
        </Label>
        {fileDropped && <p>File dropped</p>}
        <Label>
          <Title>Body:</Title>
          <TextArea rows="4" cols="70" wrap="hard" name="body" />
        </Label>
        {error && <Error>Please fill out all the fields</Error>}
        <Buttons text="Submit" />
      </FormStyled>
    );
};

Form.propTypes = {
  openCreate: func.isRequired,
  addBlog: func.isRequired,
};

export default Form;
