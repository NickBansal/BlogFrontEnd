import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
      <PageWrapper>
        <Sidebar labels={data.map(blog => blog.label)} />
        <AllBlogs data={data} />
      </PageWrapper>
      {loading && <h1>Loading</h1>}
      {error && <p>Error</p>}
    </React.Fragment>
  );
};

export default HomePage;
