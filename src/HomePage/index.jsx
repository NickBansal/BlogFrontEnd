import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import GlobalStyle from 'Components/GlobalStyles';
import { getAllBlogs } from 'Utils';
import { transitionSpeed } from 'Components/StyleGuide';
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
  filter: ${({ create }) => (create ? 'grayscale(30%) blur(5px)' : 'none')};
  transition: ${transitionSpeed};
  transition-delay: ${transitionSpeed};
  pointer-events: ${({ create }) => (create ? 'none' : 'auto')};;
`;

const HomePage = () => {
  const [state, setState] = useState({
    data: [],
    error: false,
    loading: true,
    filtered: [],
    create: false,
  });

  useEffect(() => {
    getAllBlogs()
      .then((blogs) => {
        setState({
          create: false,
          data: blogs[0],
          loading: false,
          filtered: blogs[0],
        });
      })
      .catch(() => setState({ error: true }));
  }, []);

  const filterBlogs = (value) => {
    const { data } = state;
    const filtered = value === 'All' ? data : data.filter(blog => blog.category === value);
    setState({ ...state, filtered });
  };

  const removeBlog = (blogId) => {
    const { data } = state;
    const filtered = data.filter(blog => blog._id !== blogId);
    setState({ ...state, filtered });
  };

  const openCreate = (value) => {
    setState({ ...state, create: value });
  };

  const addBlog = (blog) => {
    const filtered = state.data.concat(blog);
    setState({ ...state, filtered });
  };

  const {
    data, loading, error, filtered, create,
  } = state;

  const labelArray = data.map(blog => blog.category);

  return (
    <React.Fragment>
      <GlobalStyle />
      <TopNavigation handleClick={filterBlogs} openCreate={openCreate} />
      {loading && <Loading />}
      <CreateModal create={create} openCreate={openCreate} addBlog={addBlog} />
      <PageWrapper create={create}>
        {!loading && <Sidebar labels={labelArray} handleClick={filterBlogs} />}
        <Router primary={false}>
          <AllBlogs path="/" data={filtered} />
          <SingleBlog path="/:id" handleClick={filterBlogs} removeBlog={removeBlog} />
        </Router>
      </PageWrapper>
      {error && <p>Error</p>}
    </React.Fragment>
  );
};

export default HomePage;
