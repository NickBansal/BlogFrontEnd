import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { getSingleBlog } from 'Utils';
import { spacing } from 'Components/StyleGuide';

const Loading = styled.h1`
margin-top: ${spacing.s5};
  display: flex;
  justify-content: center;
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
    <div>
      {loading && <Loading>Loading....</Loading>}
      {error && <Loading>Loading....</Loading>}
      <p>{blog.title}</p>
      <img src={blog.image} alt="blog" />
    </div>
  );
};

SingleBlog.propTypes = {
  id: string.isRequired,
};

export default SingleBlog;
