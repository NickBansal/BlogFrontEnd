import React from 'react';
import styled from 'styled-components';
import {
  breakPoints, colors, transitionSpeed,
} from 'Components/StyleGuide';
import { Title, Image } from 'Components/GlobalStyles';

const BlogTitle = styled(Title)`
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
BlogTitle.displayName = 'BlogTitle';

const SingleBlog = ({ blogs, id }) => {
  const filteredBlog = blogs.filter(blog => blog._id === id)
  return (
    <React.Fragment>
      {!filteredBlog.length && <h1>LOADING</h1>}
      {
        filteredBlog.length > 0 &&
        <React.Fragment>
          <Image src={filteredBlog[0].image} alt="cat" />
          <BlogTitle>{filteredBlog[0].title}</BlogTitle>
        </React.Fragment>
      }
    </React.Fragment>
  )
};

export default SingleBlog;
