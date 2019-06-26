import React from 'react';
import {
  arrayOf, shape, string, bool,
} from 'prop-types';
import styled from 'styled-components';
import { colors } from 'Components/StyleGuide';

const BlogWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  display: flex;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  border-radius: 10px 50px;
  margin-right: 20px;
`;

const Title = styled.h2`
  color: ${colors.textColor};
  
  &:hover {
    cursor: pointer;
    color: ${colors.highlightText};
  }
`;

const AllBlogs = ({ data }) => (
  <React.Fragment>
    {data.map(blog => (
      <BlogWrapper key={blog._id}>
        <Image src={blog.image} alt="blog" />
        <div>
          <Title>{blog.title}</Title>
          <p>{blog.body.substring(0, 100)}</p>
        </div>
      </BlogWrapper>
    ))}
  </React.Fragment>
);

AllBlogs.propTypes = {
  data: arrayOf(shape({
    _id: string,
    title: string,
    edited: bool,
    body: string,
    created: string,
    image: string,
    label: string,
  })).isRequired,
};

export default AllBlogs;
