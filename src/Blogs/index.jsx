import React from 'react';
import autobind from 'react-autobind';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { GlobalStyle } from 'Components/GlobalStyles';
import { getAllBlogs } from 'Utils';
import TopNavigation from 'Blogs/TopNavigation';
import AllBlogs from 'Blogs/AllBlogs';
import SingleBlog from 'Blogs/SingleBlog';
import { breakPoints } from 'Components/StyleGuide';
import ErrorMessage from 'Components/ErrorMessage';

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  justify-content: center;
  margin: auto;

  @media (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
  }
`;

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBlogs: [],
      labels: [],
      loading: true,
      selected: 'All',
      error: false,
    };
    autobind(this);
  }

  componentDidMount() {
    getAllBlogs().then((blogs) => {
      this.setState({
        allBlogs: blogs[0],
        filteredBlogs: blogs[0],
        labels: blogs[0].map(blog => blog.label),
        loading: false,
      });
    }).catch((error) => {
      this.setState({
        error,
      });
    });
  }

  handleClick(value) {
    const { allBlogs } = this.state;
    const filteredBlogs = value === 'All'
      ? allBlogs
      : allBlogs.filter(blog => blog.label === value);

    this.setState({
      filteredBlogs,
      selected: value,
    });
  }

  render() {
    const {
      labels, filteredBlogs, loading, selected, error,
    } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        <TopNavigation handleClick={this.handleClick} />
        <BlogWrapper>
          <Router>
            {error && <ErrorMessage path="/" singleBlog={false} />}
            {!error && (
              <AllBlogs
                loading={loading}
                handleClick={this.handleClick}
                blogs={filteredBlogs}
                labels={labels}
                selected={selected}
                path="/"
              />
            )}
            <SingleBlog
              handleClick={this.handleClick}
              path="/blog/:id"
            />
          </Router>
        </BlogWrapper>
      </React.Fragment>
    );
  }
}

export default Blogs;
