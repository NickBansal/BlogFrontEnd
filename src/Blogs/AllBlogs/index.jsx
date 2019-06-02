import React from 'react';
import {
  arrayOf, shape, string,
} from 'prop-types';
import styled from 'styled-components';

const EveryBlog = styled.div`
margin-top: 30px;
`;

const IndividualBlog = styled.div`
display: flex;
width: 80%
justify-content: center;
margin: 40px auto;
max-width: 700px;
`;

const BlogInfo = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`;

const Image = styled.img`
width: 240px;
height: 210px;
margin-right: 20px;
`;

const Title = styled.h3`
margin: 0;
font-size: 23px;
color: #577284;
line-height: 1.4rem;
`;

const Body = styled.p`
font-size: 15px;
color: #577284;
`;

const AllBlogs = ({ blogs }) => (
  <EveryBlog>
    {blogs.map(blog => (
      <IndividualBlog key={blog.title}>
        <Image src={blog.image} alt="cat" />
        <BlogInfo>
          <Title>{blog.title}</Title>
          <Body>{`${blog.body.substring(0, 200)}...`}</Body>
          <h4>{blog.label}</h4>
        </BlogInfo>
      </IndividualBlog>
    ))}
  </EveryBlog>
);

AllBlogs.propTypes = {
  blogs: arrayOf(shape({
    title: string,
    image: string,
    body: string,
    label: string,
    created: string,
  })),
};

AllBlogs.defaultProps = {
  blogs: [],
};

export default AllBlogs;
