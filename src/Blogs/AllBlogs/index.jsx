import React from 'react';
import {
  arrayOf, shape, string,
} from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import {
  breakPoints, spacing, colors, transitionSpeed,
} from 'Components/StyleGuide';

const EveryBlog = styled.div`
margin-top: ${spacing.s4};
`;

const IndividualBlog = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%
justify-content: center;
margin: ${spacing.s5} auto;
max-width: 700px;

@media (min-width: ${breakPoints.tablet}) {
flex-direction: row;
}
`;

const BlogInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 210px;
width: 80%;
@media (min-width: ${breakPoints.tablet}) {
margin-left: ${spacing.s3};
}
`;

const Image = styled.img`
width: 80%;
margin-bottom: ${spacing.s3};

@media (min-width: ${breakPoints.tablet}) {
  flex-direction: row;
  width: 250px;
  height: 210px;
  margin: 0 ${spacing.s3} 0 0
}
`;

const Title = styled.h3`
margin: 0;
font-size: 23px;
color: ${colors.textColor};
line-height: 1.4rem;
text-align: center;

@media (min-width: ${breakPoints.tablet}) {
text-align: left;
}

&:hover {
  cursor: pointer;
  color: ${colors.highlightText};
}

transition: all ${transitionSpeed} ease;
`;

const Body = styled.p`
font-size: 15px;
color: ${colors.textColor};
text-align: center;

@media (min-width: ${breakPoints.tablet}) {
text-align: left;
}
`;

const DateAndTags = styled.div`
display: flex;
justify-content: space-between;
`;

const Label = styled.h4`
margin: 0;
font-size: 12px;
color: ${colors.textColor};
font-weight: 100;
`;

const AllBlogs = ({ blogs }) => (
  <EveryBlog>
    {blogs.map(blog => (
      <IndividualBlog key={blog.title}>
        <Image src={blog.image} alt="cat" />
        <BlogInfo>
          <div>
            <Title>{blog.title}</Title>
            <Body>{`${blog.body.substring(0, 200)}...`}</Body>
          </div>
          <DateAndTags>
            <Label>
              in
              {' '}
              <strong>{blog.label}</strong>
            </Label>
            <Label>
              {`Created: ${moment(blog.created).format('DD/MM/YYYY')}`}
            </Label>
          </DateAndTags>
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
