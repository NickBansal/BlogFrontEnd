import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { func } from 'prop-types';
import { spacing, colors, breakPoints } from 'Components/StyleGuide';

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

const DropZone = ({ handleDrop }) => (
    <Dropzone onDrop={handleDrop}>
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
);

DropZone.propTypes = {
    handleDrop: func.isRequired,
};

export default DropZone;
