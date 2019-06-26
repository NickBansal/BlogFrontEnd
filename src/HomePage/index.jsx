import React, { useState, useEffect } from 'react';
import GlobalStyle from 'Components/GlobalStyles';
import { getAllBlogs } from 'Utils';
import TopNavigation from './TopNavigation';
import AllBlogs from './AllBlogs';

const HomePage = () => {
  const [data, setData] = useState([]);
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
      <AllBlogs data={data} />
      {error && <p>Error</p>}
    </React.Fragment>
  );
};

export default HomePage;
