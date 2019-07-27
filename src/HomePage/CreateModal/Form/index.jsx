import React, { useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { spacing, colors, breakPoints } from 'Components/StyleGuide';
import { postSingleBlog } from 'Utils';
import Buttons from 'Components/Buttons';
import Completed from './Completed';
import DropZone from './DropZone';

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

const TextArea = styled(InputStyled)`
  height: 200px;
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
`;

const FileDropped = styled.div`
  height: 40px;
  width: 90%;
  border: 2px solid ${colors.textColor};
  padding: 0 ${spacing.s1};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-style: italic;
  @media (min-width: ${breakPoints.mobile}) {
    width: 80%;
    font-size: 18px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FileNotSupported = styled(FileDropped)`
  border: 2px solid ${colors.navHighlight};
  color: ${colors.navHighlight};
  @media (min-width: ${breakPoints.mobile}) {
    font-size: 16px;
  }
`;

const Form = ({ openCreate, addBlog }) => {
  const [state, setState] = useState({
    completed: false,
    error: false,
    fileDropped: false,
    fileInput: null,
    notSupported: false,
    title: '',
    category: '',
    body: '',
  });
  const {
    completed,
    error,
    id,
    fileDropped,
    fileInput,
    title,
    category,
    body,
    notSupported,
  } = state;

  const completedDone = () => setState({ ...state, completed: false });

  const handleDrop = (file) => {
    if (file[0].type !== 'image/jpeg' && file[0].type !== 'image/png') {
      setState({ ...state, fileDropped: true, notSupported: true });
    } else {
      setState({
        ...state, fileDropped: true, fileInput: file[0], notSupported: false,
      });
    }
  };

  const disabledBtn = !title.length
    || !category.length || !body.length || !fileDropped || notSupported;

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
          formData.set('body', e.target[2].value);
          formData.append('productImage', fileInput);

          postSingleBlog(formData)
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
            onChange={e => setState({ ...state, title: e.target.value })}
          />
        </Label>
        <Label>
          <Title> Label:</Title>
          <InputStyled
            type="text"
            onChange={e => setState({ ...state, category: e.target.value })}
          />
        </Label>
        <Label>
          <Title> Image:</Title>
          {!fileDropped && <DropZone handleDrop={handleDrop} />}
          {fileDropped && !notSupported && (
            <FileDropped
              onClick={() => setState({ ...state, fileDropped: false, notSupported: false })}
            >
              File selected, please click here to replace file
            </FileDropped>
          )}
          {fileDropped && notSupported
            && (
              <FileNotSupported
                onClick={() => setState({ ...state, fileDropped: false, notSupported: false })}
              >
                File type not supported, please click here to replace file
              </FileNotSupported>
            )}
        </Label>
        {fileDropped && !notSupported && <FileName>{fileInput.name}</FileName>}
        <Label>
          <Title>Body:</Title>
          <TextArea
            rows="4"
            cols="70"
            wrap="hard"
            name="body"
            onChange={e => setState({ ...state, body: e.target.value })}
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
