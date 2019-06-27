import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import GlobalStyle from 'Components/GlobalStyles';
import { getAllBlogs } from 'Utils';
import Loading from 'Components/Loading';
import TopNavigation from './TopNavigation';
import AllBlogs from './AllBlogs';
import Sidebar from './Sidebar';
import SingleBlog from './SingleBlog';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: auto;
  max-width: 800px;
`;

const HomePage = () => {
  const [state, setState] = useState({
    data: [],
    error: false,
    loading: true,
  });

  useEffect(() => {
    getAllBlogs()
      .then((blogs) => {
        setState({ data: blogs[0], loading: false });
      })
      .catch(() => setState({ error: true }));
  }, []);

  const { data, loading, error } = state;

  return (
    <React.Fragment>
      <GlobalStyle />
      <TopNavigation />
      {!loading && <Loading />}
      <PageWrapper>
        {!loading && <Sidebar labels={data.map(blog => blog.label)} />}
        <Router primary={false}>
          <AllBlogs path="/" data={data} />
          <SingleBlog path="/:id" />
        </Router>
      </PageWrapper>
      {error && <p>Error</p>}
    </React.Fragment>
  );
};

export default HomePage;
