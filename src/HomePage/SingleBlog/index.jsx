import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { getSingleBlog } from 'Utils';
import { spacing, colors, breakPoints } from 'Components/StyleGuide';

const Loading = styled.h1`
  margin-top: ${spacing.s5};
  display: flex;
  justify-content: center;
`;

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

const SingleBlog = ({ id }) => {
  const [blog, setBlog] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleBlog(id)
      .then((data) => {
        setBlog(data[0]);
        setLoading(false);
      })
      .catch(err => setError(err));
  }, []);

  return (
    <BlogWrapper>
      {loading && <Loading>Loading....</Loading>}
      {error && <Loading>Loading....</Loading>}
      <Image src={blog.image} alt="blog" />
      <Title>{blog.title}</Title>
      <Body>{blog.body}</Body>
      <BlogInfo>
        <p>{`Created: ${moment(blog.created).format('DD/MM/YYYY')}`}</p>
        <p><strong>{`in ${blog.label}`}</strong></p>
      </BlogInfo>
    </BlogWrapper>
  );
};

SingleBlog.propTypes = {
  id: string.isRequired,
};

export default SingleBlog;
