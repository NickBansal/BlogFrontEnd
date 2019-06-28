import React, { useState, useEffect, useCallback } from 'react';
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
    filtered: [],
  });

  useEffect(() => {
    getAllBlogs()
      .then((blogs) => {
        setState({ data: blogs[0], loading: false, filtered: blogs[0] });
      })
      .catch(() => setState({ error: true }));
  }, []);

  const filterBlogs = useCallback((value) => {
    const filtered = state.data.filter(blog => blog.label === value);
    setState({ ...state, filtered });
  }, [state]);

  const {
    data, loading, error, filtered,
  } = state;

  const labelArray = data.map(blog => blog.label);

  return (
    <React.Fragment>
      <GlobalStyle />
      <TopNavigation />
      {loading && <Loading />}
      <PageWrapper>
        {!loading && <Sidebar labels={labelArray} handleClick={filterBlogs} />}
        <Router primary={false}>
          <AllBlogs path="/" data={filtered} />
          <SingleBlog path="/:id" />
        </Router>
      </PageWrapper>
      {error && <p>Error</p>}
    </React.Fragment>
  );
};

export default HomePage;
