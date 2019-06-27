import React, { } from 'react';
import {
  arrayOf, shape, string, bool,
} from 'prop-types';
import styled from 'styled-components';
import { colors, transitionSpeed, spacing } from 'Components/StyleGuide';

const BlogWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 80%;
  padding: ${spacing.s2}
  border-bottom: 2px solid rgba(0,0,0,.15);
  box-shadow: 0 30px 40px rgba(0,0,0,.1);
`;

const FullWrapper = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Image = styled.img`
height: 150px;
width: 150px;
  border-radius: 10px 50px;
  margin-right: 20px;
`;

const Title = styled.h2`
  color: ${colors.textColor};
  
  &:hover {
    cursor: pointer;
    color: ${colors.highlightText};
  }
  transition: ${transitionSpeed};
`;

const AllBlogs = ({ data }) => (
  <FullWrapper>
    {data.map((blog, index) => {
      const lastElement = index === data.length - 1;
      return (
        <BlogWrapper lastElement={lastElement} key={blog._id}>
          <Image src={blog.image} alt="blog" />
          <div>
            <Title>{blog.title}</Title>
            <p>{blog.body.substring(0, 100)}</p>
          </div>
        </BlogWrapper>
      );
    })}
  </FullWrapper>
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
