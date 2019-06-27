import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import GlobalStyle from 'Components/GlobalStyles';
import { getAllBlogs } from 'Utils';
import TopNavigation from './TopNavigation';
import AllBlogs from './AllBlogs';
import Sidebar from './Sidebar';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: auto;
  max-width: 800px;
`;

const Loading = styled.h1`
  display: flex;
  justify-content: center;
`;

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
      {loading && <Loading>Loading....</Loading>}
      <PageWrapper path="/">
        {!loading && <Sidebar labels={data.map(blog => blog.label)} />}
        <Router>
          <AllBlogs path="/" data={data} loading={loading} />
        </Router>
      </PageWrapper>
      {error && <p>Error</p>}
    </React.Fragment>
  );
};

export default HomePage;
