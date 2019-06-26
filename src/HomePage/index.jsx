import React, { useState, useEffect } from 'react';
import GlobalStyle from 'Components/GlobalStyles';
import { getAllBlogs } from 'Utils';
import TopNavigation from './TopNavigation';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogs()
      .then((blogs) => {
        setData(blogs[0]);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <TopNavigation />
      {loading && <h1>Loading</h1>}
      {data && <h1>{data.map(blog => <p key={blog._id}>{blog.title}</p>)}</h1>}
      {error && <p>Error</p>}
    </React.Fragment>
  );
};

export default HomePage;
