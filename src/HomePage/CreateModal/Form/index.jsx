import React, { useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import Dropzone from 'react-dropzone';
import { spacing, colors, breakPoints } from 'Components/StyleGuide';
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

const Section = styled.section`
  height: 80px;
  width: 90%;
  border-radius: 4px;
  display: flex;
  border: 2px dotted;
  padding: 0 ${spacing.s1};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakPoints.mobile}) {
    flex-direction: row;
    width: 80%;
  }

  &:hover {
    cursor: pointer;
  }
`;

const DropZoneText = styled.p`
  font-size: 15px;
  @media (min-width: ${breakPoints.mobile}) {
    font-size: 18px;
  }
}
`;

const DZInner = styled.div`
  &:focus {
    outline: none;
  }
`;

const Click = styled.span`
  color: ${colors.navText};
  font-style: italic;
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
          {!fileDropped && (
            <Dropzone
              onDrop={file => setState({ ...state, fileDropped: true, fileInput: file[0] })}
            >
              {({ getRootProps, getInputProps }) => (
                <Section>
                  <DZInner {...getRootProps()}>
                    <input {...getInputProps()} />
                    <DropZoneText>
                      Drag and drop some files here, or
                      {' '}
                      <Click>click</Click>
                      {' '}
                      to select files
                    </DropZoneText>
                  </DZInner>
                </Section>
              )}
            </Dropzone>
          )}
          {fileDropped
            && (
              <FileDropped
                onClick={() => setState({ ...state, fileDropped: false, fileInput: null })}
              >
                File selected, please click here to replace file
              </FileDropped>
            )}
        </Label>
        {fileDropped && <FileName>{fileInput.name}</FileName>}
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
