import React, { useState, useEffect } from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from '@reach/router';
import { getSingleBlog, deleteSingleBlog } from 'Utils';
import {
  spacing, colors, breakPoints, transitionSpeed, imageRadius,
} from 'Components/StyleGuide';
import Loading from 'Components/Loading';
import Buttons from 'Components/Buttons';
import Deleted from './Deleted';

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacing.s5};
  padding: ${spacing.s3};
`;

const Image = styled.img`
  border-radius: ${imageRadius};
  width: 100%;

  @media (min-width: ${breakPoints.tablet}) {
    width: 550px;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: ${colors.textColor};
`;

const Body = styled.p`
  text-align: center;
  color: ${colors.textColor};
  word-break: break-all;
`;

const BlogInfo = styled.div`
  display: flex;
  color: ${colors.textColor};
  justify-content: space-between;
  width: 100%;
`;

const Bold = styled.strong`
  &:hover {
    cursor: pointer;
    color: ${colors.highlightText};
  }
`;

const LinkStyled = styled(Link)`
  color: ${colors.textColor};
  text-decoration: none;
  transition: ${transitionSpeed};
`;

const SingleBlog = ({ id, handleClick }) => {
  const [state, setState] = useState({
    blog: [],
    error: false,
    loading: true,
    deleted: false,
    deleteError: false,
  });

  useEffect(() => {
    getSingleBlog(id)
      .then((blogs) => {
        setState({ blog: blogs[0], loading: false });
      })
      .catch(() => setState({ error: true }));
  }, [id]);

  const {
    blog, loading, error, deleted,
  } = state;

  return (
    <React.Fragment>
      {loading && <Loading />}
      {deleted && <Deleted deleted={deleted} />}
      <BlogWrapper>
        <Image src={blog.image} alt="blog" />
        <Buttons
          text="Delete"
          handleClick={() => {
            deleteSingleBlog(blog._id)
              .then(() => setState({ ...state, deleted: true }))
              .catch(() => setState({ ...state, deleteError: true }));
          }}
        />
        <Title>{blog.title}</Title>
        <Body>{blog.body}</Body>
        <BlogInfo>
          {blog.created && <p>{`Created: ${moment(blog.created).format('DD/MM/YYYY')}`}</p>}
          <p>
            in
            {' '}
            <LinkStyled to="/">
              <Bold onClick={() => handleClick(blog.category)}>{blog.category}</Bold>
            </LinkStyled>
          </p>
        </BlogInfo>
        {error && <Loading />}
      </BlogWrapper>
    </React.Fragment>
  );
};

SingleBlog.propTypes = {
  id: string,
  handleClick: func,
};

SingleBlog.defaultProps = {
  id: '',
  handleClick: () => { },
};

export default SingleBlog;
