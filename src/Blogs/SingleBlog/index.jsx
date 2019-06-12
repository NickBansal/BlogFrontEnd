import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {
  breakPoints, colors, transitionSpeed,
} from 'Components/StyleGuide';
import { Title, Image } from 'Components/GlobalStyles';

const IndividualBlog = styled.div`
  flex-basis: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
        <IndividualBlog>
          <Image src={filteredBlog[0].image} alt="cat" />
          <BlogTitle>{filteredBlog[0].title}</BlogTitle>
        </IndividualBlog>
      }
    </React.Fragment>
  )
};

export default SingleBlog;
