import React from 'react';
import {
  arrayOf, shape, string, instanceOf, oneOfType,
} from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import {
  breakPoints, spacing, colors, transitionSpeed,
} from 'Components/StyleGuide';
import { Title, LinkStyled, Image } from 'Components/GlobalStyles';
import SideBar from 'Blogs/SideBar';

const EveryBlog = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${breakPoints.tablet}) {
    flex-direction: row-reverse;
  }
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

const ImageStyled = styled(Image)`
  @media (min-width: ${breakPoints.tablet}) {
    width: 250px;
    height: 210px;
    margin: 0 ${spacing.s3} 0 0
  }
`;

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

const Body = styled.p`
  font-size: 15px;
  color: ${colors.textColor};
  text-align: center;

  @media (min-width: ${breakPoints.tablet}) {
    text-align: left;
  }
`;
Body.displayName = 'Body';

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
Label.displayName = 'Label';


const AllBlogs = ({ blogs, labels }) => (
  <EveryBlog>
    <SideBar labels={labels} />
    <div>
      {blogs.map(blog => (
        <IndividualBlog key={blog.title}>
          <ImageStyled src={blog.image} alt="cat" />
          <BlogInfo>
            <div>
              <LinkStyled to={`/blog/${blog._id}`}>
                <BlogTitle>{blog.title}</BlogTitle>
              </LinkStyled>
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
    </div>
  </EveryBlog>
);

AllBlogs.propTypes = {
  blogs: arrayOf(shape({
    title: string,
    image: string,
    body: string,
    label: string,
    created: oneOfType([instanceOf(Date), string]),
  })),
};

AllBlogs.defaultProps = {
  blogs: [],
};

export default AllBlogs;
