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
import CreateModal from './CreateModal';

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
        setState({
          data: blogs[0], loading: false, filtered: blogs[0], create: false,
        });
      })
      .catch(() => setState({ error: true }));
  }, []);

  const filterBlogs = (value) => {
    const { data } = state;
    const filtered = value === 'All' ? data : data.filter(blog => blog.label === value);
    setState({ ...state, filtered });
  };

  const openCreate = () => {
    setState({ ...state, create: !state.create });
  };

  const {
    data, loading, error, filtered, create,
  } = state;

  const labelArray = data.map(blog => blog.label);

  return (
    <React.Fragment>
      <GlobalStyle />
      <TopNavigation handleClick={filterBlogs} openCreate={openCreate} />
      {loading && <Loading />}
      {create && <CreateModal />}
      <PageWrapper>
        {!loading && <Sidebar labels={labelArray} handleClick={filterBlogs} />}
        <Router primary={false}>
          <AllBlogs path="/" data={filtered} />
          <SingleBlog path="/:id" handleClick={filterBlogs} />
        </Router>
      </PageWrapper>
      {error && <p>Error</p>}
    </React.Fragment>
  );
};

export default HomePage;
