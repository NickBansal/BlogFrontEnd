import React from 'react';
import {
  arrayOf, shape, string,
} from 'prop-types';
import styled from 'styled-components';
import { breakPoints } from '../../Components/StyleGuide';

const EveryBlog = styled.div`
margin-top: 30px;
`;

const IndividualBlog = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%
justify-content: center;
margin: 40px auto;
max-width: 700px;

@media (min-width: ${breakPoints.tablet}) {
flex-direction: row;
}
`;

const BlogInfo = styled.div`
display: flex;
flex-direction: column;

@media (min-width: ${breakPoints.tablet}) {
margin-left: 20px;
}
`;

const Image = styled.img`
width: 80%;
margin-bottom: 20px;

@media (min-width: ${breakPoints.tablet}) {
  flex-direction: row;
  width: 250px;
  height: 210px;
  margin: 0 20px 0 0
}
`;

const Title = styled.h3`
margin: 0;
font-size: 23px;
color: #577284;
line-height: 1.4rem;
text-align: center;

@media (min-width: ${breakPoints.tablet}) {
text-align: left;
}
`;

const Body = styled.p`
font-size: 15px;
color: #577284;
text-align: center;

@media (min-width: ${breakPoints.tablet}) {
text-align: left;
}
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
