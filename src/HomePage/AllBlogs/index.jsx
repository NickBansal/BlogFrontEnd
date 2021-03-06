import React, { } from 'react';
import {
  arrayOf, shape, string, bool, instanceOf, oneOfType, func, number,
} from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from '@reach/router';
import {
  colors, transitionSpeed, spacing, breakPoints, boxShadow, imageRadius,
} from 'Components/StyleGuide';
import Loading from 'Components/Loading';

const BlogWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: ${spacing.s2};
  align-items: center;
  border-bottom: ${({ lastElement }) => (lastElement ? 'none' : '2px solid rgba(0,0,0,.1)')};
  
  @media (min-width: ${breakPoints.mobile}) {
    box-shadow: ${boxShadow};
    flex-direction: row;
  }
`;
BlogWrapper.displayName = 'BlogWrapper';

const FullWrapper = styled.div`
  margin: ${spacing.s5} auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: ${imageRadius};
  margin-right: ${spacing.s3};
`;
Image.displayName = 'Image';

const Title = styled.h2`
  color: ${colors.textColor};
  font-size: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: ${colors.highlightText};
  }
  transition: ${transitionSpeed};
  @media (min-width: ${breakPoints.mobile}) {
    font-size: 24px;
    text-align: left;
  }
`;
Title.displayName = 'Title';

const LinkStyled = styled(Link)`
    text-decoration: none;
`;

const Body = styled.p`
  text-align: center;
  color: ${colors.textColor};
  margin: ${spacing.s1} 0 0 0;
  word-break: break-word;
  @media (min-width: ${breakPoints.mobile}) {
    text-align: left;
  }
`;

const BlogInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing.s2};
`;

const Info = styled.p`
  color: ${colors.textColor};
  margin: 0;
  font-size: 13px;
`;

const Pagination = styled.div`
  display: flex;
  margin: ${spacing.s3} auto;
`;
Pagination.displayName = 'Pagination';

const Page = styled.div`
  border: 2px solid black;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  background: ${({ currentPage }) => (currentPage ? 'orange' : 'white')}
  &:hover {
    cursor: pointer;
    background: yellow;
  }
`;
Page.displayName = 'Page';

const AllBlogs = ({
  data, handlePageChange, blogsPerPage, currentPage, loading,
}) => {
  const indexOfLastTodo = currentPage * blogsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - blogsPerPage;
  const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / blogsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(num => (
    <Page
      currentPage={currentPage === num}
      key={num}
      onClick={() => handlePageChange(num)}
    >
      {num}
    </Page>
  ));

  return (
    <FullWrapper>
      {loading && <Loading />}
      {currentTodos.map((blog, index) => {
        const lastElement = index === data.length - 1;
        return (
          <BlogWrapper
            lastElement={lastElement}
            key={blog._id}
          >
            <Image src={`data:image/png;base64, ${blog.image}`} alt="blog" />
            <div>
              <LinkStyled to={`/${blog._id}`}>
                <Title>{blog.title}</Title>
              </LinkStyled>
              <Body>
                {`${blog.body.substring(0, 100)}...`}
              </Body>
              <BlogInfoWrapper>
                <Info>{`Created: ${moment(blog.created).format('DD/MM/YYYY')}`}</Info>
                <Info>{`In: ${blog.category}`}</Info>
              </BlogInfoWrapper>
            </div>

          </BlogWrapper>
        );
      })}
      <Pagination>{renderPageNumbers}</Pagination>
    </FullWrapper>
  );
};

AllBlogs.propTypes = {
  data: arrayOf(shape({
    _id: string,
    title: string,
    edited: bool,
    body: string,
    created: oneOfType([string, instanceOf(Date)]),
    image: string,
    label: string,
  })).isRequired,
  handlePageChange: func.isRequired,
  blogsPerPage: number.isRequired,
  currentPage: number.isRequired,
  loading: bool.isRequired,
};

export default AllBlogs;
