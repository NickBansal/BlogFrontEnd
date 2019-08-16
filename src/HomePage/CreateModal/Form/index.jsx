import React, { useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import {
  spacing, colors, breakPoints, transitionSpeed,
} from 'Components/StyleGuide';
import { postSingleBlog } from 'Utils';
import Buttons from 'Components/Buttons';
import Completed from './Completed';
import DropZone from './DropZone';
import FilePrompts from './FilePrompts';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${spacing.s2} 0;
`;

const InputStyled = styled.input`
  height: 40px;
  width: 90%;
  padding: 0 ${spacing.s1};
  font-size: 20px;
  border-radius: 4px;
  border: 2px solid ${colors.inputBorder};
  color: ${colors.textColor};

  @media (min-width: ${breakPoints.mobile}) {
    width: 80%;
  }
  
`;

const TextArea = styled.textarea`
  height: 200px;
  width: 90%;
  padding: 0 ${spacing.s1};
  font-size: 20px;
  border-radius: 4px;
  border: 2px solid ${colors.inputBorder};
  color: ${colors.textColor};

  @media (min-width: ${breakPoints.mobile}) {
    width: 80%;
  }
  
`;

const Label = styled.label`
  width: 97%;
  margin: ${spacing.s1}
  font-size: 20px;
  color: ${colors.textColor};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${breakPoints.mobile}) {
    flex-direction: row;
    width: 100%;
  }

`;

const Title = styled.p`
  margin: 4px 0;
  width: 13%;
`;

const SharedMessage = styled.p`
text-align: center;
margin: ${spacing.s1} auto;
height: 30px;
width: 91%;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;

@media (min-width: ${breakPoints.mobile}) {
  width: 95%;
  font-size: 18px;
}
`;

const Error = styled(SharedMessage)`
  color: ${colors.navHighlight};
  border: 2px solid ${colors.navHighlight};
`;

const FileName = styled(SharedMessage)`
  color: ${colors.navText};
  border: 2px solid ${colors.navText};
  margin: 0 auto;

  @media (min-width: ${breakPoints.mobile}) {
    width: 95.5%;
  }
`;

const Progress = styled(SharedMessage)`
  background: ${colors.navText};
  margin: 0 auto;
  word-break: break-all;
  position: absolute;
  top: 0;
  height: 33px;
  left: 12px;
  max-width: 93%;
  width: ${({ progress }) => progress}%;
  transition: ${transitionSpeed};

  @media (min-width: ${breakPoints.mobile}) {
    max-width: 95.5%;
    width: ${({ progress }) => progress}%;
  }
`;

const ProgressWrapper = styled.div`
  position: relative;
  margin-bottom: ${spacing.s1};
`;

const Form = ({ openCreate, addBlog }) => {
  const [state, setState] = useState({
    completed: false,
    error: false,
    fileDropped: false,
    fileInput: null,
    notSupported: false,
    data: {
      title: '',
      category: '',
      body: '',
    },
    progress: 0,
  });
  const {
    completed,
    error,
    id,
    fileDropped,
    fileInput,
    data: {
      title,
      category,
      body,
    },
    notSupported,
    progress,
  } = state;

  const completedDone = () => setState({ ...state, completed: false });

  const handleDrop = (file) => {
    if (file[0].type !== 'image/jpeg' && file[0].type !== 'image/png') {
      setState({
        ...state, fileDropped: true, notSupported: true, error: false,
      });
    } else {
      setState({
        ...state, fileDropped: true, fileInput: file[0], notSupported: false, error: false,
      });
    }
  };

  const handleClick = () => setState({ ...state, fileDropped: false, notSupported: false });

  const progressBar = value => setState({ ...state, progress: value });

  const disabledBtn = !title.length
    || !category.length || !body.length || !fileDropped || notSupported;

  return completed
    ? <Completed id={id} openCreate={openCreate} finished={completedDone} />
    : (
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData();

          Object.keys(state.data).forEach((key, index) => {
            formData.append(key, e.target[index].value);
          });

          formData.append('productImage', fileInput);

          postSingleBlog(formData, progressBar)
            .then((blog) => {
              addBlog(blog);
              setState({
                ...state, error: false, completed: true, id: blog._id, fileDropped: false,
              });
            }).catch(() => {
              setState({ ...state, error: true, fileDropped: false });
            });
        }}
      >
        <Label>
          <Title>Title:</Title>
          <InputStyled
            id="title"
            type="text"
            onChange={e => setState({ ...state, data: { ...state.data, title: e.target.value } })}
          />
        </Label>
        <Label>
          <Title> Label:</Title>
          <InputStyled
            type="text"
            onChange={
              e => setState({ ...state, data: { ...state.data, category: e.target.value } })
            }
          />
        </Label>
        <Label>
          <Title> Image:</Title>
          {!fileDropped && <DropZone handleDrop={handleDrop} />}
          {fileDropped && (
            <FilePrompts
              handleClick={handleClick}
              notSupported={notSupported}
            />
          )}
        </Label>
        <ProgressWrapper>
          {fileDropped && !notSupported && <FileName>{fileInput.name}</FileName>}
          {fileDropped && !notSupported && <Progress progress={progress} />}
        </ProgressWrapper>
        <Label>
          <Title>Body:</Title>
          <TextArea
            name="body"
            onChange={e => setState({ ...state, data: { ...state.data, body: e.target.value } })}
          />
        </Label>
        {error && <Error>Something went wrong, please try again</Error>}
        <Buttons text="Submit" disabled={disabledBtn} />
      </FormStyled>
    );
};
Form.propTypes = {
  openCreate: func.isRequired,
  addBlog: func.isRequired,
};
export default Form;
