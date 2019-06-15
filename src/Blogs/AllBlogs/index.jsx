import React from 'react';
import {
  arrayOf, shape, string, instanceOf, oneOfType, func, bool,
} from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import {
  breakPoints, spacing, colors, transitionSpeed,
} from 'Components/StyleGuide';
import { Title, LinkStyled, Image } from 'Components/GlobalStyles';
import SideBar from 'Blogs/AllBlogs/SideBar';
import Loading from 'Components/Loading';
import Filter from './Filter';

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
IndividualBlog.displayName = 'IndividualBlog';

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

const Form = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
`;


const AllBlogs = ({
  blogs, labels, handleClick, loading, selected, handleSort,
}) => (
  <React.Fragment>
    <Form>
      <Filter handleSort={handleSort} />
    </Form>
    <EveryBlog>
      {!loading
          && (
            <SideBar
              selected={selected}
              handleClick={handleClick}
              labels={labels}
            />
          )}
      <div>
        {loading && <Loading />}
        {blogs.map(blog => (
          <IndividualBlog key={blog._id}>
            <ImageStyled src={blog.image} alt="cat" />
            <BlogInfo>
              <div>
                <LinkStyled to={`/blog/${blog._id}`}>
                  <BlogTitle>{blog.title}</BlogTitle>
                </LinkStyled>
                <Body>{`${blog.body.substring(0, 150)}...`}</Body>
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
  </React.Fragment>
);

AllBlogs.propTypes = {
  blogs: arrayOf(shape({
    title: string,
    image: string,
    body: string,
    label: string,
    created: oneOfType([instanceOf(Date), string]),
  })),
  labels: arrayOf(string),
  handleClick: func,
  loading: bool,
  selected: string,
  handleSort: func,
};

AllBlogs.defaultProps = {
  blogs: [],
  labels: [],
  handleClick: () => { },
  loading: false,
  selected: '',
  handleSort: () => { },
};

export default AllBlogs;
