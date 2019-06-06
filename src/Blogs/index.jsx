/* eslint-disable react/no-unused-state */
import React from 'react';
import autobind from 'react-autobind';
import styled from 'styled-components';
import { GlobalStyle } from 'Components/GlobalStyles';
import { getAllBlogs } from 'Utils';
import TopNavigation from 'Blogs/TopNavigation';
import AllBlogs from 'Blogs/AllBlogs';
import SideBar from 'Blogs/SideBar';
import { breakPoints } from 'Components/StyleGuide';

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto

  @media (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
  }
`;

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBlogs: [],
    };
    autobind(this);
  }

  componentDidMount() {
    getAllBlogs().then((blogs) => {
      this.setState({
        allBlogs: blogs[0],
      });
    }).catch((error) => {
      this.setState({
        error,
      });
    });
  }

  render() {
    const { allBlogs } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        <TopNavigation />
        <BlogWrapper>
          <AllBlogs blogs={allBlogs} />
          <SideBar labels={allBlogs.map(blog => blog.label)} />
        </BlogWrapper>
      </React.Fragment>
    );
  }
}

export default Blogs;
