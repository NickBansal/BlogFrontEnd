import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { getSingleBlog } from 'Utils';
import { spacing, colors, breakPoints } from 'Components/StyleGuide';
import Loading from 'Components/Loading';

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacing.s5};
  padding: ${spacing.s3};
`;

const Image = styled.img`
  border-radius: 10px 50px;
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

const SingleBlog = ({ id }) => {
  const [state, setState] = useState({
    blog: [],
    error: false,
    loading: true,
  });

  useEffect(() => {
    getSingleBlog(id)
      .then((blogs) => {
        setState({ blog: blogs[0], loading: false });
      })
      .catch(() => setState({ error: true }));
  }, [id]);

  const { blog, loading, error } = state;

  return (
    <BlogWrapper>
      {loading && <Loading />}
      {error && <Loading />}
      <Image src={blog.image} alt="blog" />
      <Title>{blog.title}</Title>
      <Body>{blog.body}</Body>
      <BlogInfo>
        <p>{`Created: ${moment(blog.created).format('DD/MM/YYYY')}`}</p>
        <p>
          in
          {' '}
          <Bold>{blog.label}</Bold>
        </p>
      </BlogInfo>
    </BlogWrapper>
  );
};

SingleBlog.propTypes = {
  id: string.isRequired,
};

export default SingleBlog;
