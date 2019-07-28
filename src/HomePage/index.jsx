import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { GlobalStyle } from 'Components/GlobalStyles';
import getAllBlogs from 'Utils/getAllBlogs';
import { transitionSpeed } from 'Components/StyleGuide';
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
  pointer-events: ${({ create }) => (create ? 'none' : 'auto')};
`;

const HomePage = () => {
  const [state, setState] = useState({
    data: [],
    error: false,
    loading: true,
    filtered: [],
    create: false,
    currentPage: 1,
    blogsPerPage: 4,
  });

  useEffect(() => {
    getAllBlogs()
      .then((blogs) => {
        setState({
          ...state,
          create: false,
          data: blogs[0],
          loading: false,
          filtered: blogs[0],
          deleted: false,
        });
      })
      .catch(() => setState({ ...state, error: true }));
    // eslint-disable-next-line
  }, []);

  const filterBlogs = (value) => {
    const { data } = state;
    const filtered = value === 'All' ? data : data.filter(blog => blog.category === value);
    setState({ ...state, filtered });
  };

  const removeBlog = (blogCategory) => {
    const { data } = state;
    const newData = data.filter(blog => blog.category !== blogCategory);
    setState({
      ...state, filtered: newData, data: newData, deleted: false,
    });
  };

  const openCreate = value => setState({ ...state, create: value });

  const openDelete = () => setState({ ...state, deleted: true });

  const addBlog = (blog) => {
    const data = state.data.concat(blog);
    setState({ ...state, data });
  };

  const handlePageChange = (pageNumber) => {
    setState({ ...state, currentPage: pageNumber });
  };

  const {
    data, loading, error, filtered, create, deleted, currentPage, blogsPerPage,
  } = state;

  const labelArray = data.map(blog => blog.category);

  return (
    <React.Fragment>
      <GlobalStyle />
      <TopNavigation
        handleClick={filterBlogs}
        openCreate={openCreate}
        disable={create || deleted}
      />
      <CreateModal
        create={create}
        openCreate={openCreate}
        addBlog={addBlog}
      />
      <PageWrapper create={create}>
        {!loading && (
          <Sidebar
            labels={labelArray}
            handleClick={filterBlogs}
            disable={create || deleted}
          />
        )}
        <Router primary={false}>
          <AllBlogs
            path="/"
            data={filtered}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            blogsPerPage={blogsPerPage}
            loading={loading}
          />
          <SingleBlog
            path="/:id"
            handleClick={filterBlogs}
            removeBlog={removeBlog}
            deleted={deleted || false}
            openDelete={openDelete}
          />
        </Router>
      </PageWrapper>
      {error && <p>Error</p>}
    </React.Fragment>
  );
};

export default HomePage;
